import { useEffect, useState } from "react";
import "./index.css";

function App() {

    const [announcements, setAnnouncements] =
        useState<any[]>([]);

    const [favorites, setFavorites] =
        useState<number[]>([]);

    const [recommendations, setRecommendations] =
        useState<any[]>([]);

    useEffect(() => {

        fetch(
            "http://localhost:3000/announcements"
        )
            .then(response => response.json())
            .then(data => setAnnouncements(data));

        const storedFavorites =
            localStorage.getItem(
                "favorites"
            );

        if (storedFavorites) {

            setFavorites(
                JSON.parse(
                    storedFavorites
                )
            );
        }

    }, []);

    const toggleFavorite = (
        id: number
    ) => {

        const updatedFavorites =
            favorites.includes(id)
                ? favorites.filter(
                    favorite =>
                        favorite !== id
                )
                : [
                    ...favorites,
                    id
                ];

        setFavorites(
            updatedFavorites
        );

        localStorage.setItem(
            "favorites",
            JSON.stringify(
                updatedFavorites
            )
        );
    };

    const getRecommendations =
        async () => {

        const payload =
            favorites.map(
                (
                    announcementId,
                    index
                ) => ({
                    id: index + 1,
                    userId: 1,
                    announcementId
                })
            );

        console.log(
            "Favoris envoyés :",
            payload
        );

        const response =
            await fetch(
                "http://localhost:3000/recommendations",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body: JSON.stringify(
                        payload
                    )
                }
            );

        const data =
            await response.json();

        setRecommendations(
            data
        );
    };

    return (

        <div className="container">

            <h1>RetroBonCoin</h1>

            <h2>Catalogue</h2>

            <div className="announcements-grid">

                {announcements.map(
                    item => (

                        <div
                            key={item.id}
                            className={`card ${
                                favorites.includes(
                                    item.id
                                )
                                    ? "favorite"
                                    : ""
                            }`}
                        >

                            <h3>
                                {item.title}
                            </h3>

                            <p>
                                {item.description}
                            </p>

                            <p>
                                Plateforme :
                                {" "}
                                {item.platform}
                            </p>

                            <p className="price">
                                {item.price} €
                            </p>

                            <button
                                onClick={() =>
                                    toggleFavorite(
                                        item.id
                                    )
                                }
                            >
                                {
                                    favorites.includes(
                                        item.id
                                    )
                                        ? "Retirer des favoris"
                                        : "Ajouter aux favoris"
                                }
                            </button>

                        </div>
                    )
                )}

            </div>

            <button
                className="action-button"
                onClick={
                    getRecommendations
                }
            >
                Générer les recommandations
            </button>

            <h2>
                Recommandations
            </h2>

            <div className="recommendations">

                {recommendations.map(
                    (
                        recommendation,
                        index
                    ) => (

                        <div
                            key={
                                recommendation
                                    .announcement.id
                            }
                            className="recommendation-item"
                        >

                            <strong>
                                {index + 1}
                                {" - "}
                                {
                                    recommendation
                                        .announcement
                                        .title
                                }
                            </strong>

                            <div>
                                Score :
                                {" "}
                                {
                                    recommendation
                                        .score
                                        .toFixed(3)
                                }
                            </div>

                        </div>

                    )
                )}

            </div>

        </div>
    );
}

export default App;