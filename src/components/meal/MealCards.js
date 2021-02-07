import MealCard from './MealCard'

function MealCards() {
  return (
    <>
      <div className="cha-cards d-flex justify-content-center ">
        <i className="fas fa-chevron-circle-left cha-left-icon cha-green"></i>
        <MealCard />
        <i className="fas fa-chevron-circle-right cha-rigth-icon cha-green"></i>
      </div>
    </>
  )
}
export default MealCards
