import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.header}>Expo Go</Text>
        <Pressable
          onPress={() => {
            alert("log in Button pressed");
          }}
          style={{}}
        >
          <Text style={styles.header}>log in</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <View style={styles.header2}>
          <Text style={styles.header2}>Development servers</Text>
          <Pressable
            onPress={() => {
              alert("help in Button pressed");
            }}
            style={{}}
          >
            <Text style={styles.linktext}>HELP</Text>
          </Pressable>
        </View>
        <View style={styles.Card}>
          <Text style={styles.body}>
            Press here to sign in to your Expo account and see the projects you
            have recently been working on
          </Text>
          <Text style={styles.body}>{">"} Enter URL</Text>
          <Text style={styles.body}>Scan QR</Text>
        </View>
        <View style={styles.header2}>
          <Text style={styles.header2}>Recent history</Text>
          <Pressable
            onPress={() => {
              alert("history in Button pressed");
            }}
            style={{}}
          >
            <Text style={styles.linktext}>CLEAR</Text>
          </Pressable>
        </View>
        <View style={styles.Card}>
          <Text style={styles.body}> my-app</Text>
          <Text style={styles.body}> myFirstApp</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable
          onPress={() => {
            alert("home Button pressed");
          }}
          style={{}}
        >
          <Text style={styles.footer}>home</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            alert("alert Button pressed");
          }}
          style={{}}
        >
          <Text style={styles.footer}>alert</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            alert("settings Button pressed");
          }}
          style={{}}
        >
          <Text style={styles.footer}>settings</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  Card: {
    backgroundColor: "#161c21",
    borderColor: "#faffff",
    borderRadius: 12,

    borderStyle: "solid",
    borderWidth: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: "#000000",
  },
  body: {
    color: "#faffff",
    fontSize: 18,
    borderTopColor: "#faffff",
    borderTopWidth: 1,
    padding: 14,
  },
  header: {
    backgroundColor: "#161c21",
    padding: 12,
    color: "#faffff",
    fontSize: 20,
    fontWeight: "800",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header2: {
    color: "#faffff",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 16,
  },
  linktext: {
    fontSize: 16,
    color: "#9595c0",
    padding: 10,
  },

  footer: {
    backgroundColor: "#161c21",
    padding: 12,
    color: "#faffff",
    fontSize: 14,
    fontWeight: "800",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
