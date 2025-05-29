import UserProfileCard from './UserProfileCard';
import './App.css';
import UserProfileCard2 from './UserProfileCard2';
import pimg from './assets/pimg2.jpg';

function App() {
  return (
    <div>
      <UserProfileCard2
         
         fullName={"Mukoro Oghenetega"}
         username={"te_ga_mm"}
         profileImg={pimg}
         Bio={"Aspiring Front-End Developer with hands-on experience in HTML, CSS, and JavaScript. Currently expanding skills in React and React Native."}
         pointAmount={"10"}
         friendAmount={"10"}
      />
    </div>
  );
}

export default App;
