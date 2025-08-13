import  FamilyName  from "./components/FamilyName";
import  GivenName  from "./components/GivenName";
import  ChildComponent  from "./components/ChildComponent";

function App(){
  return(
    <div>
      <div>
        <FamilyName name="山田" />/<GivenName name="一郎"/>
      </div>
      <div>
        <FamilyName name="鈴木" />/<GivenName name="二郎"/>
      </div>
      <div>
        <FamilyName name="佐藤" />/<GivenName name="一郎"/>
      </div>

<ChildComponent>
childrenを使うと、任意の子要素を受け取ることができます！！
</ChildComponent>
    </div>


  );
}
export default App;

