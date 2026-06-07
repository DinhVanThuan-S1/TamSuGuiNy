export interface Letter {
  id: number;
  title: string;
  date: string;
  mood: string;
  iconName: "Heart" | "Sparkles" | "CloudRain" | "Sunset" | "Lock" | "Camera" | "MessageSquare" | "BookOpen" | "Activity";
  styleType: "pink" | "sticker" | "rain" | "warm" | "luxury" | "polaroid" | "mist" | "diary" | "ending" | "special";
  isLocked: boolean;
  password?: string;
  summary: string;
  content: string[];
}

export const lettersData: Letter[] = [
  {
    id: 10,
    title: "Gửi em, người anh thương nhất ❤️",
    date: "07/06/2026",
    mood: "Đặc biệt nhất ✨❤️",
    iconName: "Heart",
    styleType: "special",
    isLocked: false,
    summary: "Anh viết lá thư này từ tận đáy lòng để gửi đến em, sau khi đọc đi đọc lại những gì em chia sẻ...",
    content: [
      "Yêuuuuuuuu ơi!!!",
      "Sau khi đọc đi đọc lại những gì em chia sẻ, anh nghĩ cuối cùng anh cũng hiểu được phần nào cảm giác của em trong khoảng thời gian vừa rồi.",
      "Anh hiểu rằng sự im lặng của em hôm đó không phải vì em hết yêu anh, cũng không phải vì em chán anh hay không còn muốn ở bên anh nữa. Chỉ đơn giản là lúc đó em đang có những nỗi buồn và áp lực riêng mà em chưa biết phải diễn tả như thế nào. Trong khi điều em cần là một người ở bên cạnh để lắng nghe, để vỗ về và cho em cảm giác được dựa vào, thì anh lại vì quá lo lắng và sợ mất em mà chỉ nhìn thấy nỗi buồn của chính mình.",
      "Anh cũng hiểu rằng có lẽ trong thời gian qua em đã cố gắng nhiều hơn anh nghĩ. Chỉ là anh quá tập trung vào những điều còn thiếu nên vô tình bỏ qua những thay đổi và nỗ lực nhỏ của em. Em đã cố học cách quan tâm anh theo cách của em, cố gắng sửa những điều anh góp ý, nhưng thay vì ghi nhận điều đó, nhiều lúc anh lại chỉ khiến em cảm thấy mình chưa đủ tốt.",
      "Anh hiểu cảm giác của em khi mỗi lần em muốn chia sẻ nỗi buồn, em lại có cảm giác câu chuyện bị chuyển sang cảm xúc của anh. Anh hiểu cảm giác bị đặt vào vị trí của người làm sai, người vô tâm, trong khi em chưa từng cố ý làm tổn thương anh. Anh cũng hiểu vì sao em cảm thấy mệt mỏi, áp lực và có cảm giác như mình đang cố hoàn thành \"nhiệm vụ người yêu\" thay vì được thoải mái tận hưởng tình yêu.",
      "Đọc những dòng em viết, anh nhận ra có lẽ lâu nay anh đã quá sợ mất em. Vì yêu em nhiều nên mỗi lần em buồn, em im lặng hay em khác đi một chút, anh lại vô thức nghĩ rằng nguyên nhân là do tình cảm của em dành cho anh thay đổi. Chính nỗi sợ đó khiến anh liên tục tìm kiếm sự bảo đảm từ em, và vô tình tạo thêm áp lực cho người anh thương nhất.",
      "Anh xin lỗi vì điều đó.",
      "Anh không hứa rằng ngày mai anh sẽ thay đổi hoàn toàn, vì anh biết những điều thuộc về cảm xúc không thể sửa trong một sớm một chiều. Nhưng anh hứa sẽ cố gắng.",
      "Anh sẽ học cách lắng nghe em nhiều hơn trước khi nói về cảm xúc của mình.",
      "Anh sẽ học cách tin em nhiều hơn thay vì vội vàng suy diễn những điều tồi tệ nhất.",
      "Anh sẽ cố gắng nhìn nhận những nỗ lực của em thay vì chỉ nhìn vào những điều em còn thiếu.",
      "Anh sẽ học cách để tình yêu của mình trở thành nơi em cảm thấy bình yên, chứ không phải là nơi em phải lo lắng mình đã làm đủ hay chưa.",
      "Và anh cũng sẽ cố gắng cân bằng lại bản thân, để không đặt hết niềm vui, nỗi buồn hay sự an toàn của mình lên vai em. Em là người anh yêu, là người anh muốn đồng hành cùng, chứ không phải người phải gánh trách nhiệm chữa lành mọi bất an trong anh.",
      "Anh vẫn rất trân trọng những gì tụi mình đang có. Sau tất cả những gì em chia sẻ, điều anh cảm nhận được không phải là em muốn rời xa anh, mà là em vẫn đang cố gắng ở lại và tìm cách để cả hai hiểu nhau hơn.",
      "Vậy nên anh cũng muốn cố gắng cùng em.",
      "Không phải để trở thành một cặp đôi hoàn hảo, mà để trở thành hai người biết lắng nghe, thấu hiểu và khiến nhau cảm thấy nhẹ lòng hơn mỗi khi ở cạnh nhau.",
      "❤️",
      "P/S: Anh đã khóa 9 bức thư trước đó bằng mật mã để em có thể đọc chúng sau khi chúng mình thấu hiểu nhau hơn. Mật mã mở khóa chung là: yxxxyxy"
    ]
  },
  {
    id: 1,
    title: "Cách tụi mình yêu nhau",
    date: "25/05/2026",
    mood: "Thấu hiểu 🤍",
    iconName: "Heart",
    styleType: "pink",
    isLocked: true,
    password: "yeuvyvy",
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
    isLocked: true,
    password: "yeuvyvy",
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
    isLocked: true,
    password: "yeuvyvy",
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
    isLocked: true,
    password: "yeuvyvy",
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
    isLocked: true,
    password: "yeuvyvy",
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
    iconName: "Camera",
    styleType: "polaroid",
    isLocked: true,
    password: "yeuvyvy1",
    summary: "Góc nhỏ bí mật nói về sự sẻ chia và chăm sóc lẫn nhau.",
    content: [
      "Chuyện tiền bạc hay quà cáp thì anh muốn nói rõ là anh chưa bao giờ tiếc với em cả. Anh thích dẫn em đi ăn, đi chơi, mua quà cho em vì anh thương em nên anh tự nguyện làm thôi. Nhưng thật lòng anh cũng mong em cho anh thấy là em cũng có ý muốn share cùng anh một chút. Không cần phải món quà gì lớn hay phải trả tiền lại cho anh đâu, chỉ cần đôi khi em chủ động mua cho anh ly nước, một món nhỏ nhỏ, hay đơn giản là nói “để hôm nay em trả cho” thôi cũng đủ để anh cảm thấy mình được em để tâm rồi."
    ]
  },
  {
    id: 7,
    title: "Bí mật 2",
    date: "25/05/2026",
    mood: "Gần gũi 🫂",
    iconName: "Heart",
    styleType: "mist",
    isLocked: true,
    password: "yeuvyvy2",
    summary: "Những tâm sự thầm kín về sự gần gũi trong tình yêu.",
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
    isLocked: true,
    password: "yeuvyvy",
    summary: "Về những cuộc gọi, hình ảnh và câu chuyện chia sẻ mỗi ngày cùng em...",
    content: [
      "Anh còn để ý là các cặp độ khác thường hay call, gửi ảnh, voice, kể chuyện trong ngày cho nhau nghe. Còn tụi mình thì hầu như rất ít. Nhiều lúc anh muốn nghe giọng em, muốn được em gửi ảnh cho anh nhưng anh lại phải xin mãi mới có. Nên lâu dần anh cũng mệt và bắt đầu nghĩ rằng có phải chỉ mình anh đang cố giữ cảm xúc trong mối quan hệ này không."
    ]
  },
  {
    id: 9,
    title: "Học cách yêu em mỗi ngày",
    date: "25/05/2026",
    mood: "Yêu thương 💖",
    iconName: "Activity",
    styleType: "ending",
    isLocked: true,
    password: "yeuvyvy",
    summary: "Lá thư cuối cùng gửi gắm thông điệp chân thành nhất từ sâu thẳm trái tim anh...",
    content: [
      "Vì thật sự anh đã thể hiện tình cảm với em gần như bằng tất cả những gì anh biết làm rồi. Anh đăng em lên story, anh nói cho bạn bè biết anh yêu em, anh quan tâm từng chút một, lúc nào cũng nghĩ đến em, muốn dành thời gian cho em, muốn làm mọi thứ tốt nhất cho em. Nhưng đôi lúc anh vẫn chưa cảm nhận được rõ ràng tình yêu từ phía em nên anh mới hay suy nghĩ và tủi thân như vậy. Anh nói ra không phải để trách em hay ép em phải thay đổi thành một người khác đâu. Anh chỉ muốn em hiểu cảm giác của anh, để nếu thương anh thì mình cùng nhau cố gắng điều chỉnh một chút cho cả hai thấy dễ chịu và hạnh phúc hơn thôi."
    ]
  }
];

