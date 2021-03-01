function RecipePic(props) {
  const { getrecipeData, dataLoadingforTittle, setDataLoadingforTittle } = props
  return (
    <>
      <div
        className={
          dataLoadingforTittle
            ? 'cha-rec-main-pic col-12 col-lg-5 cha-loading'
            : 'cha-rec-main-pic col-12 col-lg-5 '
        }
      >
        <div className="cha-rec-main-pic1">
          <img
            className="cha-rec-main-pic2"
            src={`http://localhost:3015/img/meal/${getrecipeData.mealData[0].product_id}.png`}
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default RecipePic
