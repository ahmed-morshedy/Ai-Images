const api = "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";
const input = document.getElementById("inp");
const mainDiv = document.querySelector(".container");

const getImg = async () => {
  mainDiv.innerHTM = "";
  const methods = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api}`,
    },
    body: JSON.stringify({
      prompt: input.value,
      n: 3,
      size: "256x256",
    }),
  };
  const res = await fetch(
    "https://api.openai.com/v1/images/generations",
    methods
  );

  const data = await res.json();
  const imgList = data.data;
  imgList.forEach((photo) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = photo.url;
    div.appendChild(img);
    mainDiv.appendChild(div);
  });
};
