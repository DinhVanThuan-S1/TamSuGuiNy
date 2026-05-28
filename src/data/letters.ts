export interface Letter {
  id: number;
  title: string;
  date: string;
  mood: string;
  iconName: "Heart" | "Sparkles" | "CloudRain" | "Sunset" | "Lock" | "Camera" | "MessageSquare" | "BookOpen" | "Activity";
  styleType: "pink" | "sticker" | "rain" | "warm" | "luxury" | "polaroid" | "mist" | "diary" | "ending";
  isLocked: boolean;
  password?: string;
  summary: string;
  content: string[];
}

export const lettersData: Letter[] = [
  {
    id: 1,
    title: "Cách tụi mình yêu nhau",
    date: "14/02/2025 21:00",
    mood: "Thấu hiểu 🤍",
    iconName: "Heart",
    styleType: "pink",
    isLocked: false,
    summary: "Anh biết mỗi người sẽ có cách yêu khác nhau, anh muốn nói hết lòng mình để em hiểu anh hơn...",
    content: [
      "Em bé à, anh biết mỗi người chúng mình đều sẽ có những cách yêu và thể hiện tình cảm khác nhau.",
      "Anh cũng hiểu rằng em đang cần thêm thời gian để quen dần với việc có sự xuất hiện của một người bên cạnh trong cuộc sống hằng ngày. Anh không bao giờ muốn ép em phải thay đổi ngay lập tức hay bắt em phải yêu theo cách của riêng anh đâu nha.",
      "Nhưng vì anh thật sự rất nghiêm túc trong mối quan hệ này, nên anh nghĩ mình nên nói hết những cảm xúc chân thật nhất của mình ra để em có thể hiểu anh nhiều hơn một chút."
    ]
  },
  {
    id: 2,
    title: "Chuyện tin nhắn và sự chờ đợi",
    date: "08/03/2025 09:30",
    mood: "Tâm sự 💬",
    iconName: "Sparkles",
    styleType: "sticker",
    isLocked: false,
    summary: "Những tin nhắn hồi đáp nhanh chóng và cảm giác ngóng trông từ phía anh...",
    content: [
      "Chuyện nhắn tin có lẽ là thứ khiến anh phải suy nghĩ và trăn trở nhiều nhất mỗi ngày.",
      "Nhiều lúc em nhắn cho anh một câu, anh rep gần như ngay lập tức vì lúc nào thấy thông báo tin nhắn của em anh cũng muốn trả lời liền. Có khi đang chạy xe ngoài đường, dừng đèn đỏ anh cũng tranh thủ lấy điện thoại ra rep em nữa.",
      "Nhưng rồi em lại biến mất 5-7 phút, có khi lâu hơn thế, xong quay lại nhắn tiếp như chưa có chuyện gì xảy ra. Ngày nào chuyện này cũng lặp lại nên thật sự anh có cảm giác mình cứ phải ngồi chờ hoài á.",
      "Anh biết em từng nói đó là thói quen của em, em hay quên rep hoặc không cầm điện thoại nhiều. Nhưng đôi lúc anh vẫn thấy hơi buồn vì anh là người yêu em mà, nên anh mong mình sẽ khác biệt và đặc biệt hơn những người khác một chút.",
      "Nếu em bận học, bận đi chơi với bạn hay đang bận làm việc gì đó, thì em chỉ cần nói trước với anh một câu: 'Em bận xíu nha' là anh đã không phải ngồi đợi rồi suy nghĩ lung tung nữa rồi."
    ]
  },
  {
    id: 3,
    title: "Cảm giác được nhớ tới",
    date: "20/03/2025 23:15",
    mood: "Dịu nhẹ 🌧️",
    iconName: "CloudRain",
    styleType: "rain",
    isLocked: false,
    summary: "Một chút mong ước nhỏ nhoi về sự chủ động ngọt ngào giữa hai đứa mình...",
    content: [
      "Rồi cả chuyện chủ động quan tâm nhau nữa em ơi...",
      "Từ lúc tụi mình quen nhau tới giờ, đa số đều là anh chủ động mở lời trước, anh tìm em trước và anh hỏi han em trước.",
      "Anh không phải kiểu người tính toán chi li ai nhắn trước ai nhắn sau đâu, anh chỉ là cũng muốn được trải nghiệm cảm giác được em nhớ tới, được em chủ động tìm kiếm một chút thôi.",
      "Chỉ cần một câu hỏi han đơn giản như: 'Anh đang làm gì đó' hay 'Nay ngày của anh thế nào rồi' từ em thôi là đã đủ làm anh vui vẻ và ấm áp cả ngày trời rồi đấy."
    ]
  },
  {
    id: 4,
    title: "Góc nhỏ công khai và hẹn hò",
    date: "05/04/2025 15:45",
    mood: "Ấm áp ☕",
    iconName: "Sunset",
    styleType: "warm",
    isLocked: false,
    summary: "Mong muốn được em thoải mái đón nhận anh bước vào cuộc sống của em...",
    content: [
      "Về chuyện set hẹn hò hay công khai tình cảm, anh hoàn toàn hiểu và tôn trọng việc em thích sự riêng tư cũng như muốn mọi thứ tiến triển thật từ từ.",
      "Anh cũng chưa từng có ý định ép em phải đăng bài rầm rộ lên mạng xã hội hay khoe khoang với cả thế giới là chúng mình đang yêu nhau.",
      "Nhưng đôi lúc anh vẫn thấy hơi tủi thân vì cảm giác như mình đang bị giấu đi quá nhiều vậy. Ví dụ nếu em sợ người quen biết thì mình có thể để chế độ bạn bè, hoặc chỉ ẩn một vài người quen thôi chẳng hạn.",
      "Anh chỉ muốn có cảm giác là em thật sự thoải mái khi có anh xuất hiện trong cuộc sống của em, chứ không phải lúc nào cũng phải né tránh hay lo sợ điều gì."
    ]
  },
  {
    id: 5,
    title: "Sự quan tâm từ những điều nhỏ bé",
    date: "01/05/2025 20:00",
    mood: "Chia sẻ ✨",
    iconName: "MessageSquare",
    styleType: "luxury",
    isLocked: false,
    summary: "Sự quan tâm hai chiều và mong mỏi được thấu hiểu lẫn nhau...",
    content: [
      "Còn về sự quan tâm thì thật lòng anh chưa cảm nhận được nhiều từ em trên mấy thứ nhỏ nhỏ hằng ngày.",
      "Anh thì hay xem story của em, stalk mạng xã hội của em, để ý từng cái repost nhỏ, từng cái mood thay đổi của em để biết hôm nay em vui hay buồn.",
      "Anh cũng hay chủ động hỏi han em hôm nay thế nào, ăn uống ra sao. Nhưng anh lại ít thấy em làm điều ngược lại với anh.",
      "Em cũng hiếm khi tương tác với bài đăng của anh, nhiều khi anh comment vào bài em cũng không rep nữa nên anh rất dễ có cảm giác chỉ có mình anh đang cố gắng nhiều hơn trong mối quan hệ này."
    ]
  },
  {
    id: 6,
    title: "Chuyện quà cáp và sự sẻ chia",
    date: "19/05/2025 18:30",
    mood: "Nhỏ bé 🎁",
    iconName: "Lock",
    styleType: "polaroid",
    isLocked: true,
    password: "onlyus",
    summary: "Góc nhỏ bí mật nói về sự sẻ chia và chăm sóc lẫn nhau. Nhập mật mã để mở khóa nhé...",
    content: [
      "Chúc mừng em đã mở khóa thành công hòm thư bí mật này! Mật mã 'onlyus' chính là mong ước về một thế giới riêng tư đong đầy quan tâm của hai đứa.",
      "Chuyện tiền bạc hay quà cáp thì anh muốn nói rõ là anh chưa bao giờ tiếc nuối bất kỳ điều gì với em cả.",
      "Anh rất thích dẫn em đi ăn, dẫn em đi chơi, mua những món quà nhỏ xinh cho em vì anh thương em nên anh hoàn toàn tự nguyện làm thôi.",
      "Nhưng thật lòng anh cũng mong em cho anh thấy là em cũng có ý muốn san sẻ cùng anh một chút.",
      "Không cần phải là món quà gì lớn lao hay phải trả lại tiền sòng phẳng cho anh đâu, chỉ cần đôi khi em chủ động mua cho anh ly nước, một món đồ nhỏ nhỏ, hay đơn giản là nói câu: 'Để hôm nay em trả cho' thôi cũng đủ để anh cảm thấy mình thật sự được em để tâm đến rồi."
    ]
  },
  {
    id: 7,
    title: "Những cái ôm và sự thân mật",
    date: "02/06/2025 22:10",
    mood: "Gần gũi 🫂",
    iconName: "Lock",
    styleType: "mist",
    isLocked: true,
    password: "forever",
    summary: "Những tâm sự thầm kín về sự gần gũi trong tình yêu. Nhập mật mã để mở khóa nhé...",
    content: [
      "Chúc mừng em đã mở khóa hòm thư mật mã thứ hai! 'forever' là mong muốn được đồng hành bền chặt bên em.",
      "Rồi cả chuyện thân mật nữa em à. Nhiều lúc anh cảm giác em vẫn chưa thật sự xem tụi mình là người yêu theo kiểu gần gũi với nhau.",
      "Hầu như mọi thứ đều do anh chủ động trước, từ nắm tay, cái ôm ấm áp, đến những hành động tình cảm khác. Có những lúc em còn từ chối nên anh cũng thấy hơi chạnh lòng một chút.",
      "Anh hiểu em cần thời gian thích nghi và anh luôn luôn tôn trọng cảm xúc của em. Nhưng vì anh yêu em nhiều nên đôi khi anh cũng muốn được em chủ động gần gũi lại một chút, để anh cảm thấy mình được yêu thương một cách trọn vẹn và thực sự."
    ]
  },
  {
    id: 8,
    title: "Những kết nối nhỏ hằng ngày",
    date: "15/06/2025 00:00",
    mood: "Mong đợi 📞",
    iconName: "BookOpen",
    styleType: "diary",
    isLocked: false,
    summary: "Về những cuộc gọi, hình ảnh và câu chuyện chia sẻ mỗi ngày cùng em...",
    content: [
      "Anh còn để ý là các cặp đôi khác yêu nhau thường hay gọi điện (call), gửi ảnh chụp ngẫu hứng, gửi voice note hay kể những câu chuyện vụn vặt trong ngày cho nhau nghe. Còn tụi mình thì hầu như rất ít khi làm vậy.",
      "Nhiều lúc anh muốn nghe giọng nói của em, muốn được em gửi ảnh của em cho anh xem nhưng anh lại cứ phải xin mãi mới có được.",
      "Nên lâu dần anh cũng thấy hơi mệt mỏi và bắt đầu có những suy nghĩ tiêu cực rằng có phải chỉ có một mình anh đang cố gắng giữ gìn cảm xúc trong mối quan hệ này không."
    ]
  },
  {
    id: 9,
    title: "Học cách yêu em mỗi ngày",
    date: "28/06/2025 23:00",
    mood: "Yêu thương 💖",
    iconName: "Activity",
    styleType: "ending",
    isLocked: false,
    summary: "Lá thư cuối cùng gửi gắm thông điệp chân thành nhất từ sâu thẳm trái tim anh...",
    content: [
      "Vì thật sự anh đã thể hiện tình cảm với em gần như bằng tất cả những gì anh biết và có thể làm rồi.",
      "Anh đăng em lên story, anh nói cho bạn bè xung quanh biết anh yêu em nhiều thế nào, anh quan tâm em từng chút một, lúc nào cũng nghĩ đến em, muốn dành thời gian cho em và muốn làm mọi thứ tốt nhất cho em.",
      "Nhưng đôi lúc anh vẫn chưa cảm nhận được rõ ràng tình yêu từ phía em nên anh mới hay suy nghĩ vẩn vơ và tủi thân như vậy.",
      "Anh nói ra tất cả những điều này hoàn toàn không phải để trách em hay ép em phải thay đổi thành một con người khác đâu nhé.",
      "Anh chỉ muốn em hiểu rõ hơn cảm giác của anh, để nếu em cũng thương anh, thì chúng mình cùng nhau cố gắng điều chỉnh một chút cho cả hai cảm thấy dễ chịu, thấu hiểu và hạnh phúc hơn.",
      "Anh không cần một tình yêu hoàn hảo hay xa vời. Anh chỉ muốn mỗi ngày chúng mình hiểu nhau hơn một chút thôi. Thương em thật nhiều! 💗"
    ]
  }
];
