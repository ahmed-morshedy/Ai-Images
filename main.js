const api = "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";
const input = document.getElementById("inp");
const mainDiv = document.querySelector(".container");

const getImg = async () => {
  mainDiv.innerHTML = "";
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

  const myData = await res.json();

  const imgList = myData.data;
  imgList.map((img) => {
    const divTag = document.createElement("div");
    const imgTag = document.createElement("img");
    imgTag.src = img.url;
    divTag.appendChild(imgTag);
    mainDiv.appendChild(divTag);
  });
};
