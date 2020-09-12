class Fetch {
  async getCurrent(input) {
    const myKey = "9e28a107ee603c0f503f38f29a0dc0e1";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
