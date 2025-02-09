import './AdverstPage.css';

const adverts =[
    {
        id: "83a3cd69-9230-464b-ae15-c728940e7658",
        createdAt: "2025-02-09T20:18:38.000Z",
        name: "Smartwatch",
        sale: true,
        price: 300,
        tags: [
          "lifestyle"
        ],
        photo: "http://localhost:3001/public/1739132318396-462804562.jpg"
      },
      {
        id: "af1ee28a-64c8-4ee5-8792-f66ff0d2c46a",
        createdAt: "2025-02-09T20:33:52.000Z",
        name: "Cascos",
        sale: true,
        price: 850,
        tags: [
          "work"
        ],
        photo: "http://localhost:3001/public/1739133232791-744947038.jpg"
      }
];


function AdvertsPage() {
    return (
    <div className="AdvertsPage">
        <h1>Página de Anuncios</h1>
        <ul>
            {adverts.map((advert) => (
                <li key={advert.id}>{advert.name}</li>
                ))}
        </ul>
    </div>
    );
}


export default AdvertsPage;