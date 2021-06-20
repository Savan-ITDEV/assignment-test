import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SectionGrid } from "react-native-super-grid";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import getData from "../../config/config";

export default function Product_popular(props) {
  const [items, setItems] = React.useState([
    { name: "TURQUOISE", code: "#1abc9c" },
    { name: "EMERALD", code: "#2ecc71" },
    { name: "PETER RIVER", code: "#3498db" },
    { name: "AMETHYST", code: "#9b59b6" },
    { name: "WET ASPHALT", code: "#34495e" },
    { name: "GREEN SEA", code: "#16a085" },
    { name: "NEPHRITIS", code: "#27ae60" },
    { name: "BELIZE HOLE", code: "#2980b9" },
    { name: "WISTERIA", code: "#8e44ad" },
    { name: "MIDNIGHT BLUE", code: "#2c3e50" },
    { name: "SUN FLOWER", code: "#f1c40f" },
    { name: "CARROT", code: "#e67e22" },
  ]);

  const [getData, setData] = React.useState(null);
  const imageClick = async () => {
    if (props.props != null) {
      await props.props.then(
        async function (result) {
          await setData(result);
          console.log(getData);
        },
        function (err) {
          var newName = error;
        }
      );
    }
  };

  React.useEffect(() => {
    imageClick();
  }, []);
  return  (
    <SectionGrid
      //  itemDimension={90}
      itemDimension={90}
      spacing={10}
      horizontal={true}
      sections={[
        {
          data: getData > 0 ? getData : items,
        },
      ]}
      // style={styles.gridView}
      renderItem={({ item, section, index }) => (
        <View onClick={() => imageClick()}>
          <Image
            style={styles.itemContainer}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5CPauhwegEdKNPg3X_PQevJN-XLWquVAgAQ&usqp=CAU",
            }}
          />
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </View>
      )}
    />
  ) 
}

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 5,
    padding: 10,
    height: 80,
  },
  itemName: {
    fontSize: 8,
    color: "#00000085",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 11,
    color: "#00000085",
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    alignItems: "center",
    color: "black",
    paddingLeft: 10,
  },
});
