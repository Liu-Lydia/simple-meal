function RecipeIngredient(props) {
  const { getrecipeData } = props
  console.log(getrecipeData.ingredientsData)
  return (
    <>
      <div className="col cha-sel-box-1 justify-content-between row">
        {getrecipeData.ingredientsData.map((value, index) => {
          return (
            <div
              key={value.sid}
              className="col-4 cha-sel-box-1 justify-content-center row"
            >
              <div className=" cha-ingredient-img1 justify-content-center d-flex" >
                <img
                  className="cha-ingredient-img2"
                  src={`http://localhost:3015/img/ingredient/${value.ingredient_id}.jpg`}
                  alt=""
                />
              </div>
              <div className="col-12 cha-ingredient-txt">
                {value.ingredient_name}
              </div>
            </div>
          )
        })}
      </div>
      {/* <div className="col cha-sel-box-1 justify-content-between d-flex">
        <span>瓦甘達</span>
        <span className="cha-sel-box-txt1">forever</span>
        <span className="cha-sel-box-txt2">瓦甘達</span>
        <span>forever</span>
      </div> */}
    </>
  )
}
export default RecipeIngredient
