import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    try {
      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error("Auth callback error:", error);
        return NextResponse.redirect(
          new URL("/admin?error=auth_failed", request.url)
        );
      }

      // Redirect to admin page after successful authentication
      return NextResponse.redirect(new URL("/admin", request.url));
    } catch (error) {
      console.error("Auth callback error:", error);
      return NextResponse.redirect(
        new URL("/admin?error=auth_failed", request.url)
      );
    }
  }

  // If no code, redirect to admin page
  return NextResponse.redirect(new URL("/admin", request.url));
}
