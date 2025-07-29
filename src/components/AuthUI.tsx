"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/lib/supabase";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AuthUI() {
  // Get the base URL for redirect
  const getRedirectURL = () => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/auth/callback`;
    }
    return `http://localhost:3000/auth/callback`;
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Đăng nhập Admin</CardTitle>
        <CardDescription>
          Đăng nhập để quản lý danh sách đăng ký tham dự
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#2563eb",
                  brandAccent: "#1d4ed8",
                },
              },
            },
          }}
          providers={["google", "github"]}
          redirectTo={getRedirectURL()}
          localization={{
            variables: {
              sign_in: {
                email_label: "Email",
                password_label: "Mật khẩu",
                email_input_placeholder: "Nhập email của bạn",
                password_input_placeholder: "Nhập mật khẩu",
                button_label: "Đăng nhập",
                loading_button_label: "Đang đăng nhập...",
                social_provider_text: "Đăng nhập với {{provider}}",
                link_text: "Đã có tài khoản? Đăng nhập",
              },
              sign_up: {
                email_label: "Email",
                password_label: "Mật khẩu",
                email_input_placeholder: "Nhập email của bạn",
                password_input_placeholder: "Nhập mật khẩu",
                button_label: "Đăng ký",
                loading_button_label: "Đang đăng ký...",
                social_provider_text: "Đăng ký với {{provider}}",
                link_text: "Chưa có tài khoản? Đăng ký",
                confirmation_text: "Kiểm tra email để xác nhận tài khoản",
              },
              forgotten_password: {
                email_label: "Email",
                password_label: "Mật khẩu",
                email_input_placeholder: "Nhập email của bạn",
                button_label: "Gửi hướng dẫn đặt lại mật khẩu",
                loading_button_label: "Đang gửi...",
                link_text: "Quên mật khẩu?",
                confirmation_text: "Kiểm tra email để đặt lại mật khẩu",
              },
              update_password: {
                password_label: "Mật khẩu mới",
                password_input_placeholder: "Nhập mật khẩu mới",
                button_label: "Cập nhật mật khẩu",
                loading_button_label: "Đang cập nhật...",
              },
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
