import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const SECRET_KEY = Buffer.from(process.env.CMS_SECRET || 'fallback-secret-key-at-least-32-chars-long');

export async function login(email: string) {
    if (email === 'sarthak199809@gmail.com') {
        const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24h
        const token = await new SignJWT({ email })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('24h')
            .sign(SECRET_KEY);

        const isProduction = process.env.NODE_ENV === 'production';
        // Don't set Secure on localhost even in production mode (Docker local)
        const isLocalhost = process.env.HOSTNAME === '0.0.0.0' || process.env.DEPLOYMENT_URL === undefined;

        (await cookies()).set('cms_session', token, {
            httpOnly: true,
            secure: isProduction && !isLocalhost,
            expires: expiresAt,
            sameSite: 'lax',
            path: '/',
        });
        return true;
    }
    return false;
}

export async function logout() {
    (await cookies()).delete('cms_session');
}

export async function getSession() {
    const session = (await cookies()).get('cms_session')?.value;
    if (!session) return null;

    try {
        const { payload } = await jwtVerify(session, SECRET_KEY, {
            algorithms: ['HS256'],
        });
        return payload;
    } catch (error) {
        return null;
    }
}
