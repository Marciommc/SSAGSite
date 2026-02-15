import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Admin Login",
            credentials: {
                username: { label: "Usuário", type: "text" },
                password: { label: "Senha", type: "password" },
            },
            async authorize(credentials) {
                const adminUser = process.env.ADMIN_USER || "admin";
                const adminPass = process.env.ADMIN_PASSWORD || "admin123";

                if (
                    credentials?.username === adminUser &&
                    credentials?.password === adminPass
                ) {
                    return { id: "1", name: "Admin", email: "admin@ssag.com" };
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin", // Optional: Custom sign-in page, or default
    },
    secret: process.env.NEXTAUTH_SECRET || "change_me_in_prod",
});

export { handler as GET, handler as POST };
