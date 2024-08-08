// Task #1: Write a function called children_data() that builds a Object. The function should take in an child name and father name, and it should return a Object containing these two pieces of information. Use the function to make four dictionaries representing different data. Print each return value to show that Objects are storing the data correctly.

function children_data(
  ch_name: string,
  f_name: string
): { ch_name: string; f_name: string } {
  let data = {
    ch_name: ch_name.charAt(0).toUpperCase() + ch_name.slice(1),
    f_name: f_name.charAt(0).toUpperCase() + f_name.slice(1),
  };
  return data;
}

let data1 = children_data("abbas", "assad");
console.log(data1);

let data2 = children_data("asghar", "aslam");
console.log(data2);

let data3 = children_data("anees", "ghalib");
console.log(data3);

let data4 = children_data("aslam", "anees");
console.log(data4);

// Task #2: Write a function that accepts a array of items a person buy in shopping. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the items that customer have bought. Call the function three times, using a different number of arguments each time.

function shopping(...items: string[]) {
  console.log("\nThese are your items:-");

  for (let i = 0; i < items.length; i++) {
    console.log(i + 1 + ` ${items[i]}`);
  }
}

console.log("Enjoy the discount");

shopping("Milk", "Bread", "Eggs");
shopping("Butter", "Cheese");
shopping("Apples", "Potatoes", "Bananas");
shopping("Chicken", "Beef", "Fish", "Rice");
shopping("Yogurt", "Carrots", "Onions");

// Task #3: Write a function which returns the album's data in object's form.

function make_album(
  artist: string,
  title: string,
  tracks?: number
): { artist: string; title: string; tracks?: number } {
  let dictionary = {
    artist: artist.charAt(0).toUpperCase() + artist.slice(1),
    title: title.charAt(0).toUpperCase() + title.slice(1),
  } as { artist: string; title: string; tracks?: number }; // Type assertion

  if (tracks !== undefined) {
    dictionary.tracks = tracks;
  }
  return dictionary;
}

let album1 = make_album("Michael Jackson", "Thriller");
console.log(album1);

let album2 = make_album("Beatles", "Abbey Road", 58); // Including number of tracks for this album
console.log(album2);

let album3 = make_album("Pink Floyd", "Dark Side of the Moon");
console.log(album3);
