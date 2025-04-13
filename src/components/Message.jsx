import { auth } from "../firebase";
import getUserColor from "../utils/getUserColor";

const Message = ({ data }) => {
  // Eğer `data` veya `data.author` undefined ise hata vermemesi için kontrol et
  if (!data || !data.author) {
    return null; // Eğer veri eksikse hiç render etme
  }

  // Eğer mesajı şu an oturumu açık olan kullanıcı gönderdiyse:
  if (data.author.id === auth.currentUser?.uid) {
    return (
      <p className="bg-black text-white rounded-[7px_7px_0_7px] self-end message">
        {data.text}
      </p>
    );
  }

  // Eğer mesajı farklı kullanıcı gönderdiyse:
  return (
    <div className="flex items-start gap-1">
      <img src={data.author.photo} className="size-[40px] rounded-full" />
      <div className="flex flex-col gap-1 w-full">
        <span
          className="font-bold whitespace-nowrap text-zinc-700-"
          style={{ color: getUserColor(data.author) }}
        >
          {data.author.name}
        </span>
        <p className="message text-zinc-800 bg-zinc-200 rounded-[0_7px_7px_7px]">
          {data.text}
        </p>
      </div>
    </div>
  );
};

export default Message;
