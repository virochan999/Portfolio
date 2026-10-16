import { NextResponse } from "next/server"
import { auth } from "@/auth"

// Fast redirect for signed-out visitors. Page/Action level requireAdmin()
// remains the real authorization check.
export const proxy = auth((req) => {
  const { pathname } = req.nextUrl
  if (!req.auth && pathname !== "/admin/login") {
    return NextResponse.redirect(new URL("/admin/login", req.nextUrl.origin))
  }
})

export const config = {
  matcher: ["/admin/:path*"],
}
