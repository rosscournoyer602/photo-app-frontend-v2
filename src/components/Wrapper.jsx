import Header from "/src/components/Header";
import Modal from "/src/components/modal";
import Loader from "/src/components/Loader";
import { useGlobalContext } from "/src/store/global";

export default function Wrapper(props) {
  const { showLoader, loaderMessage } = useGlobalContext();

  return (
    <div className="wrapper">
      <Header />
      {props.children}
      <Modal />
      {showLoader && <Loader message={loaderMessage} />}
    </div>
  );
}
