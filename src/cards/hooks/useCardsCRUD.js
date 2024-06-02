import { useCallback, useState } from "react";
import {
  getTradeOfferCards,
  createCard,
  getMyCards,
  editCard,
  getCard,
  getCards,
} from "../services/cardsApiService";
import { useSnack } from "../../providers/SnackbarProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useAxios from "../../hooks/useAxios";
import normalizeCard from "../helpers/normalization/normalizeCard";

export default function useCardsCRUD() {
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const setSnack = useSnack();

  useAxios();

  const getAllCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCards();
      setCards(data);
      setSnack("success", "All the cards are here");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [setSnack]);

  const getMyOwnCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getMyCards();
      setCards(data);
      setSnack("success", "All the cards are here");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [setSnack]);

  const getTradeCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getTradeOfferCards();
      console.log("getTradeCards:" + data);
      setCards(data);
      setSnack("success", "All the cards are here");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [setSnack]);

  const getCardById = useCallback(async (id) => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCard(id);
      setCard(data);
      return data;
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const handleCreateCard = useCallback(
    async (cardFromClient) => {
      setError(null);
      setIsLoading(true);

      try {
        const card = await createCard(normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", "A new business card has been created");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, navigate]
  );

  const handleUpdateCard = useCallback(
    async (cardId, cardFromClient) => {
      setIsLoading(true);

      try {
        const card = await editCard(cardId, normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", "The business card has been successfully updated");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, navigate]
  );

  const handleCardDelete = useCallback((id) => {
    console.log("you deleted card no" + id);
  }, []);

  const handleCardLike = useCallback((id) => {
    console.log("you liked card no" + id);
  }, []);

  return {
    cards,
    card,
    error,
    isLoading,
    getAllCards,
    getMyOwnCards,
    getCardById,
    getTradeCards,
    handleCardDelete,
    handleCardLike,
    handleCreateCard,
    handleUpdateCard,
  };
}
