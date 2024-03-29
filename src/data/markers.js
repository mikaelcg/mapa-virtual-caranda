import PinRed from "@/assets/img/pin-red.png";
import PinYellow from "@/assets/img/pin-yellow.png";
import PinGreen from "@/assets/img/pin-green.png";
import PinBrown from "@/assets/img/pin-brown.png";
import PinOrange from "@/assets/img/pin-orange.png";
import PinGrey from "@/assets/img/pin-grey.png";

const getMarkerHtml = (description, color = "red") => {
  let pin = PinRed;

  switch (color) {
    case "yellow":
      pin = PinYellow;
      break;
    case "green":
      pin = PinGreen;
      break;
    case "brown":
      pin = PinBrown;
      break;
    case "orange":
      pin = PinOrange;
      break;
    case "grey":
      pin = PinGrey;
      break;
    default:
      break;
  }

  return `
        <div class="flex flex-col items-center">
          <span class='marker-description text-[#fff]'>${description}</span>
          <img src='${pin}' width='38' />
        </div>
      `;
};

export default [
  {
    id: "cinemaTeca",
    longitude: 0.25,
    latitude: -0.305,
    anchor: "center center",
    html: getMarkerHtml("Cinemateca", "brown"),
    tooltip: "3 minutos",
    data: {
      category: "museus",
    },
  },
  {
    id: "pizzariaQuintalBraz",
    longitude: 0.49,
    latitude: -0.205,
    anchor: "center center",
    html: getMarkerHtml("Pizzaria Quintal do Braz", "orange"),
    tooltip: "4 minutos",
    data: {
      category: "restaurantes-padarias",
    },
  },
  {
    id: "avenidaSennaMadureira",
    longitude: -0.15,
    latitude: -0.56,
    anchor: "center center",
    html: getMarkerHtml("Av. Senna Madureira", "grey"),
    tooltip: "",
    data: {
      category: "acessos",
    },
  },
  {
    id: "farmaLife",
    longitude: -0.4,
    latitude: -0.38,
    anchor: "center center",
    html: getMarkerHtml("FarmaLife"),
    tooltip: "",
    data: {
      category: "saude",
    },
  },
  // {
  //   id: "avenidaRoquePetroniJunior",
  //   longitude: -0.06,
  //   latitude: -0.48,
  //   anchor: "center center",
  //   html: getMarkerHtml("Avenida Roque Petroni Júnior"),
  //   tooltip: "1min de carro | 300m",
  // },
  // {
  //   id: "avenidaSantoAmaro",
  //   longitude: 1.71,
  //   latitude: -0.36,
  //   anchor: "center center",
  //   html: getMarkerHtml("Avenida Santo Amaro"),
  //   tooltip: "1min de carro | 300m",
  // },
  // {
  //   id: "avenidaChucri",
  //   longitude: -1.35,
  //   latitude: -0.18,
  //   anchor: "center center",
  //   html: getMarkerHtml("Avenida Chucri Zaidan"),
  //   tooltip: "4 minutos | 1,2km",
  // },
  // {
  //   id: "avenidaBerrini",
  //   longitude: -0.78,
  //   latitude: -0.18,
  //   anchor: "center center",
  //   html: getMarkerHtml("Avenida Berrini"),
  //   tooltip: "6min de carro | 2,2km",
  // },
  // {
  //   id: "nucleoFariaLima",
  //   longitude: -0.26,
  //   latitude: 0.01,
  //   anchor: "center center",
  //   html: getMarkerHtml("Núcleo Faria Lima"),
  //   tooltip: "13min | 6,7km",
  // },
  // {
  //   id: "Portucho",
  //   longitude: 0.49,
  //   latitude: -0.14,
  //   anchor: "center center",
  //   html: getMarkerHtml("Portucho", "yellow"),
  //   tooltip: "3min | 750m",
  // },
  // {
  //   id: "vicoloNostro",
  //   longitude: 0.37,
  //   latitude: -0.17,
  //   anchor: "center center",
  //   html: getMarkerHtml("Vicolo Nostro", "yellow"),
  //   tooltip: "3min | 750m",
  // },
  // {
  //   id: "shoppingMorumbi",
  //   longitude: -1.21,
  //   latitude: -0.18,
  //   anchor: "center center",
  //   html: getMarkerHtml("Shopping Morumbi", "green"),
  //   tooltip: "4min | 1,0km",
  // },
  // {
  //   id: "shoppingMarketPlace",
  //   longitude: -1.1,
  //   latitude: -0.11,
  //   anchor: "center center",
  //   html: getMarkerHtml("Shopping Market Place", "green"),
  //   tooltip: "8min | 2,4km",
  // },
];
