import React , { useEffect } from 'react'
import CardsLoader from '../components/CardsLoader'
import useCardsCRUD from '../hooks/useCardsCRUD'
import PageHeader from '../../components/PageHeader'
import CardsDisplay from '../components/CardsDisplay'
import { Box } from '@mui/material'

export default function CardsPage() {
  const {
    cards,
    error,
    isLoading,
    getTradeCards,
    handleCardLike,
    handleCardDelete,
  } = useCardsCRUD();

  useEffect(() => {
    getTradeCards();
  }, [getTradeCards]);

  return (
    <Box sx= {{p: 5}}>
      <PageHeader
        title="Cards"
        subtitle="Here you can find the cards on offer"
      />
        <CardsLoader
         cards={cards}
         handleDelete={handleCardDelete}
         handleLike={handleCardLike}
         isLoading={isLoading}
         error={error}
        />
    </Box>
  )
}
