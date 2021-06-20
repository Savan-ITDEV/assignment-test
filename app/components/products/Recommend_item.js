import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SectionGrid } from "react-native-super-grid";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchDataApi } from "../../redux/actions/fetchData";
class Recommend_item extends Component {
  componentDidMount() {
    this.props.fetchDataApi();
  }
  render() {
    const { data, isFetching } = this.props.dataReducer;
    if (isFetching) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size={"large"} />
        </View>
      );
    } else {
      return (
        <View>
          <SectionGrid
            //  itemDimension={90}
            itemDimension={90}
            spacing={5}
            horizontal={true}
            sections={[
              {
                data: data,
              },
            ]}
            // style={styles.gridView}
            renderItem={({ item, section, index }) => (
              <View>
                <Image
                  style={styles.itemContainer}
                  source={{
                    uri: item.product_path,
                  }}
                />
                <Text style={styles.itemName}>{item.Product_name}</Text>
                <Text style={styles.itemCode}>{item.price}</Text>
              </View>
            )}
          />
        </View>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    dataReducer: state.dataReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ fetchDataApi }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend_item);

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
    textAlign: "center",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 11,
    color: "#00000085",
    textAlign: "center",
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
