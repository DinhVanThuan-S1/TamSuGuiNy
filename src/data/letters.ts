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
    date: "25/05/2026",
    mood: "Thấu hiểu 🤍",
    iconName: "Heart",
    styleType: "pink",
    isLocked: false,
    summary: "Anh biết mỗi người sẽ có cách yêu khác nhau, anh muốn nói hết lòng mình để em hiểu anh hơn...",
    content: [
      "Anh biết mỗi người sẽ có cách yêu khác nhau, và anh cũng hiểu em đang cần thời gian để quen dần với việc có thêm một người bên cạnh. Anh không muốn ép em phải thay đổi ngay lập tức hay bắt em phải yêu theo cách của anh đâu. Nhưng vì anh thật sự nghiêm túc nên anh nghĩ mình nên nói hết cảm xúc của mình ra để em hiểu anh hơn."
    ]
  },
  {
    id: 2,
    title: "Chuyện tin nhắn và sự chờ đợi",
    date: "25/05/2026",
    mood: "Tâm sự 💬",
    iconName: "Sparkles",
    styleType: "sticker",
    isLocked: false,
    summary: "Những tin nhắn hồi đáp nhanh chóng và cảm giác ngóng trông từ phía anh...",
    content: [
      "Chuyện nhắn tin là thứ khiến anh suy nghĩ nhiều nhất. Nhiều lúc em nhắn anh một câu, anh rep gần như ngay lập tức vì lúc nào thấy tin nhắn của em anh cũng muốn trả lời liền. Có khi đang chạy xe, dừng đèn đỏ anh cũng tranh thủ rep em nữa. Nhưng rồi em lại biến mất 5-7 phút, có khi lâu hơn, xong quay lại nhắn tiếp như chưa có gì. Ngày nào cũng lặp lại như vậy nên thật sự anh có cảm giác mình cứ chờ hoài á. Anh biết em nói đó là thói quen của em, em hay quên rep hoặc không cầm điện thoại nhiều, nhưng đôi lúc anh vẫn hơi buồn vì anh là người yêu em mà, nên anh mong mình sẽ khác với những người khác một chút. Nếu em bận học, bận đi với bạn hay làm gì đó thì chỉ cần nói anh một câu “em bận xíu nha” là anh đã không phải ngồi đợi rồi suy nghĩ lung tung nữa."
    ]
  },
  {
    id: 3,
    title: "Cảm giác được nhớ tới",
    date: "25/05/2026",
    mood: "Dịu nhẹ 🌧️",
    iconName: "CloudRain",
    styleType: "rain",
    isLocked: false,
    summary: "Một chút mong ước nhỏ nhoi về sự chủ động ngọt ngào giữa hai đứa mình...",
    content: [
      "Rồi chuyện chủ động nữa. Từ lúc quen nhau tới giờ, đa số đều là anh mở lời trước, anh tìm em trước, anh hỏi han trước. Anh không phải kiểu tính toán ai nhắn trước ai nhắn sau đâu, anh chỉ là cũng muốn có cảm giác được em nhớ tới, được em chủ động tìm một chút thôi. Chỉ cần một câu “anh đang làm gì đó” hay “nay anh sao rồi” từ em thôi là anh vui cả ngày rồi."
    ]
  },
  {
    id: 4,
    title: "Góc nhỏ công khai và hẹn hò",
    date: "25/05/2026",
    mood: "Ấm áp ☕",
    iconName: "Sunset",
    styleType: "warm",
    isLocked: false,
    summary: "Mong muốn được em thoải mái đón nhận anh bước vào cuộc sống của em...",
    content: [
      "Về chuyện set hẹn hò hay công khai, anh hiểu em thích sự riêng tư và muốn mọi thứ từ từ. Anh cũng chưa từng ép em phải đăng bài rầm rộ hay khoe với cả thế giới là mình yêu nhau. Nhưng đôi lúc anh vẫn thấy hơi tủi vì cảm giác như mình đang bị giấu đi quá nhiều. Ví dụ nếu sợ người quen biết thì mình có thể để chế độ bạn bè, hoặc chỉ ẩn một vài người quen thôi chẳng hạn. Anh chỉ muốn cảm giác là em thật sự thoải mái khi có anh xuất hiện trong cuộc sống của em, chứ không phải lúc nào cũng phải né tránh."
    ]
  },
  {
    id: 5,
    title: "Sự quan tâm từ những điều nhỏ bé",
    date: "25/05/2026",
    mood: "Chia sẻ ✨",
    iconName: "MessageSquare",
    styleType: "luxury",
    isLocked: false,
    summary: "Sự quan tâm hai chiều và mong mỏi được thấu hiểu lẫn nhau...",
    content: [
      "Còn về sự quan tâm thì thật lòng anh chưa cảm nhận được nhiều từ em trên mấy thứ nhỏ nhỏ hằng ngày. Anh thì hay xem story em, stalk MXH em, để ý từng cái repost, từng mood của em để biết hôm nay em vui hay buồn. Anh cũng hay hỏi han em hôm nay thế nào, ăn uống ra sao. Nhưng anh lại ít thấy em làm ngược lại với anh. Em cũng hiếm khi tương tác với bài đăng của anh, nhiều khi anh comment em cũng không rep nữa nên anh dễ có cảm giác mình đang cố nhiều hơn."
    ]
  },
  {
    id: 6,
    title: "Bí mật 1",
    date: "25/05/2026",
    mood: "Nhỏ bé 🎁",
    iconName: "Lock",
    styleType: "polaroid",
    isLocked: true,
    password: "onlyus",
    summary: "Góc nhỏ bí mật nói về sự sẻ chia và chăm sóc lẫn nhau. Nhập mật mã để mở khóa nhé...",
    content: [
      "Chuyện tiền bạc hay quà cáp thì anh muốn nói rõ là anh chưa bao giờ tiếc với em cả. Anh thích dẫn em đi ăn, đi chơi, mua quà cho em vì anh thương em nên anh tự nguyện làm thôi. Nhưng thật lòng anh cũng mong em cho anh thấy là em cũng có ý muốn share cùng anh một chút. Không cần phải món quà gì lớn hay phải trả tiền lại cho anh đâu, chỉ cần đôi khi em chủ động mua cho anh ly nước, một món nhỏ nhỏ, hay đơn giản là nói “để hôm nay em trả cho” thôi cũng đủ để anh cảm thấy mình được em để tâm rồi."
    ]
  },
  {
    id: 7,
    title: "Bí mật 2",
    date: "25/05/2026",
    mood: "Gần gũi 🫂",
    iconName: "Lock",
    styleType: "mist",
    isLocked: true,
    password: "forever",
    summary: "Những tâm sự thầm kín về sự gần gũi trong tình yêu. Nhập mật mã để mở khóa nhé...",
    content: [
      "Rồi chuyện thân mật nữa. Nhiều lúc anh cảm giác em vẫn chưa thật sự xem tụi mình là người yêu theo kiểu gần gũi với nhau. Hầu như mọi thứ đều do anh chủ động trước, từ nắm tay, ôm, đến những hành động tình cảm khác. Có những lúc em còn từ chối nên anh cũng hơi chạnh lòng. Anh hiểu em cần thời gian và anh luôn tôn trọng cảm xúc của em, nhưng vì anh yêu em nhiều nên đôi khi anh cũng muốn được em chủ động lại một chút để anh cảm thấy mình được yêu thật sự."
    ]
  },
  {
    id: 8,
    title: "Những kết nối nhỏ hằng ngày",
    date: "25/05/2026",
    mood: "Mong đợi 📞",
    iconName: "BookOpen",
    styleType: "diary",
    isLocked: false,
    summary: "Về những cuộc gọi, hình ảnh và câu chuyện chia sẻ mỗi ngày cùng em...",
    content: [
      "Anh còn để ý là các cặp đôi khác thường hay call, gửi ảnh, voice, kể chuyện trong ngày cho nhau nghe. Còn tụi mình thì hầu như rất ít. Nhiều lúc anh muốn nghe giọng em, muốn được em gửi ảnh cho anh nhưng anh lại phải xin mãi mới có. Nên lâu dần anh cũng mệt và bắt đầu nghĩ rằng có phải chỉ mình anh đang cố giữ cảm xúc trong mối quan hệ này không."
    ]
  },
  {
    id: 9,
    title: "Học cách yêu em mỗi ngày",
    date: "25/05/2026",
    mood: "Yêu thương 💖",
    iconName: "Activity",
    styleType: "ending",
    isLocked: false,
    summary: "Lá thư cuối cùng gửi gắm thông điệp chân thành nhất từ sâu thẳm trái tim anh...",
    content: [
      "Vì thật sự anh đã thể hiện tình cảm với em gần như bằng tất cả những gì anh biết làm rồi. Anh đăng em lên story, anh nói cho bạn bè biết anh yêu em, anh quan tâm từng chút một, lúc nào cũng nghĩ đến em, muốn dành thời gian cho em, muốn làm mọi thứ tốt nhất cho em. Nhưng đôi lúc anh vẫn chưa cảm nhận được rõ ràng tình yêu từ phía em nên anh mới hay suy nghĩ và tủi thân như vậy. Anh nói ra không phải để trách em hay ép em phải thay đổi thành một người khác đâu. Anh chỉ muốn em hiểu cảm giác của anh, để nếu thương anh thì mình cùng nhau cố gắng điều chỉnh một chút cho cả hai thấy dễ chịu và hạnh phúc hơn thôi."
    ]
  }
];
