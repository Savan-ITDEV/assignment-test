import axios from "axios";

const apiUrl = "https://60cdbb8991cc8e00178dbd7d.mockapi.io/api/";

// getData = async () => {
//   try {
//     const response = await axios.get(apiUrl + "product_all/allData");

//     console.log(JSON.stringify(response.data));
//     //JSON.stringify(response.data);
//   } catch (error) {
//     // handle error
//     alert(error.message);
//     //  "something went wrong !";
//   }
// };
function hello() { return "Hello" };



class B {
  async componentDidMount() {
    try {
      const response = await axios.get(apiUrl + "product_all/allData");
        console.log(JSON.stringify(response.data));

      //  setDataSource(JSON.stringify(response.data));
      return await JSON.stringify(response.data);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  abc() {}
}
const b = new B();
export default b;
