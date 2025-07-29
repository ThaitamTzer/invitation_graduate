import { Calendar, Clock, MapPin, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function VenueSection() {
  return (
    <section id="venue" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Thông Tin Sự Kiện
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tất cả thông tin chi tiết về địa điểm, thời gian và cách thức tham
            gia lễ tốt nghiệp
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center border-2 hover:border-blue-200 transition-colors">
            <CardHeader>
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-xl">Ngày tổ chức</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-900">15/07/2025</p>
              <p className="text-gray-600">Thứ Bảy</p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-blue-200 transition-colors">
            <CardHeader>
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-xl">Thời gian</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-900">14:00</p>
              <p className="text-gray-600">Chiều</p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-blue-200 transition-colors">
            <CardHeader>
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-xl">Địa điểm</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold text-gray-900">Hội trường A</p>
              <p className="text-gray-600">Đại học ABC</p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:border-blue-200 transition-colors">
            <CardHeader>
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-xl">Dress code</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold text-gray-900">Formal</p>
              <p className="text-gray-600">Trang phục lịch sự</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Địa chỉ chi tiết</CardTitle>
              <CardDescription>
                Thông tin đường đi và giao thông
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Hội trường A - Đại học ABC
                </h4>
                <p className="text-gray-600 mb-4">
                  123 Đường Đại Học, Phường 1, Quận 1, TP.HCM
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Phương tiện di chuyển:
                </h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Xe bus: Tuyến 01, 05, 19 (Trạm Đại học ABC)</li>
                  <li>• Xe máy: Có bãi gửi xe miễn phí</li>
                  <li>• Ô tô: Parking Building B (Phí 20.000đ/giờ)</li>
                  <li>• Grab/Taxi: Điểm đón trước cổng chính</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Quy trình tham dự</CardTitle>
              <CardDescription>
                Hướng dẫn chi tiết cho khách mời
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Đăng ký trực tuyến</h4>
                    <p className="text-gray-600 text-sm">
                      Điền form đăng ký dưới trang này
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Nhận xác nhận</h4>
                    <p className="text-gray-600 text-sm">
                      Email xác nhận sẽ được gửi trong 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Tham dự sự kiện</h4>
                    <p className="text-gray-600 text-sm">
                      Có mặt trước 30 phút để check-in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">Tiệc mừng</h4>
                    <p className="text-gray-600 text-sm">
                      Buffet và chụp ảnh kỷ niệm sau lễ
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
