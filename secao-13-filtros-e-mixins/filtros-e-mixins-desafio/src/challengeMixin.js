export default {
  computed: {
    wordLengthComputed() {
      // const arr = this.text2.split(" ");
      // arr.forEach((element, i) => {
      //   arr[i] = element.concat(" (" + element.length + ")");
      // });
      // return arr.join(" ");
      return this.text
        .split(' ')
        .map(w => `${w} (${w.length})`)
        .join(' ')
    }
  }
}
