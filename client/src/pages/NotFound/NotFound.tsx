import { Central as Layout } from "@/layouts";
import "./NotFound.style.scss";

function NotFound() {
  return (
    <Layout title={"Page Not Found"}>
      <h1>404</h1>
      <img src = "https://media4.giphy.com/media/IbUiwNyB6sJXIknmA6/200w.gif?cid=82a1493bjfvppmrm96l7xdebj35rf0x4n7zp429lyt9ad8um&ep=v1_gifs_related&rid=200w.gif&ct=g"></img>
    </Layout>
  );
}

export default NotFound;
