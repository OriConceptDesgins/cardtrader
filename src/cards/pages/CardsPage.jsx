import React , { useEffect, useState } from 'react'
import CardsLoader from '../components/CardsLoader'
import useCardsCRUD from '../hooks/useCardsCRUD'
import PageHeader from '../../components/PageHeader'
import { Box , Button, ButtonGroup } from '@mui/material'
import AddNewCardButton from '../components/AddNewCardButton'

export default function CardsPage() {
  const [cardType, setCardType] = useState('own');
  const {
    cards,
    error,
    isLoading,
    getAllCards,
    getTradeCards,
    getMyOwnCards,
    handleCardLike,
    handleCardDelete,
  } = useCardsCRUD();

  useEffect(() => {
    if (cardType === 'trade') {
      getTradeCards();
    } else if (cardType === 'own') {
      getMyOwnCards();
    } else if (cardType === 'all') {
      getAllCards();
    } 
  }, [cardType, getAllCards, getTradeCards, getMyOwnCards]);

  return (
    <Box sx= {{p: 5}}>
      <PageHeader
        title="Cards"
        subtitle="Here you can find the cards on offer"
      />
        <ButtonGroup>
        <Button
          variant={cardType === 'trade' ? "contained": "outlined"}
          onClick={() => setCardType('trade')}
        >
          Trade Cards
        </Button>
        <Button
          variant={cardType === 'own' ?  "contained": "outlined"}
          onClick={() => setCardType('own')}
        >
          My Own Cards
        </Button>
        <Button
          variant={cardType === 'all' ?  "contained": "outlined"}
          onClick={() => setCardType('all')}
        >
          All Cards
        </Button>

      </ButtonGroup>
        <CardsLoader
         cards={cards}
         handleDelete={handleCardDelete}
         handleLike={handleCardLike}
         isLoading={isLoading}
         error={error}
        />
       <AddNewCardButton/> 
    </Box>
  )
}
