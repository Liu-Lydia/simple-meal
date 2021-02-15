import '../styles/share-recipe.css'
import { Container, Pagination, Col } from 'react-bootstrap'
function Sharerecipe() {
  return (
    <>
      <div class="container">
        <div class="row mt-1 mb-1">
          <h4>分享食譜</h4>
          <div class="ml-auto">
            <input type="text" class="input-style" />

            <button class="xxx-sr-btsearch" type="submit">
              <i class="fas fa-search"></i>
            </button>

            <button class="xxx-sr-foodsearch">食材搜尋</button>
          </div>
        </div>
        <div class="row">
          <div class="card col-3">
            <img
              src="http://localhost:3015/img/sharerecipe/5fea5b5d27c560013957dcf9-b9960379.jpg"
              class="card-img-top mt-3"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">青檸嫩雞直管麵</h5>
              <p class="card-text">
                沒有什麼組合比香腸和辣椒更令人滿意了。畢竟，在胃液中甜美的焦糖味和肉中的超鹹味，還有什麼比這更令人放鬆呢？
              </p>
              <div class="text-right">
                <i class="far fa-clock col-green"></i>&nbsp; 40分鐘
              </div>
            </div>
          </div>
          <div class="card col-3">
            <img
              src="http://localhost:3015/img/sharerecipe/5fea5b5d27c560013957dcf9-b9960379.jpg"
              class="card-img-top mt-3"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">水稻上的西南植物基蛋白質</h5>
              <p class="card-text">
                沒有什麼組合比香腸和辣椒更令人滿意了。畢竟，在胃液中甜美的焦糖味和肉中的超鹹味，還有什麼比這
              </p>
              <div class="text-right">
                <i class="far fa-clock col-green"></i>&nbsp; 40分鐘
              </div>
            </div>
          </div>
          <div class="card col-3">
            <img
              src="http://localhost:3015/img/sharerecipe/5fea5b5d27c560013957dcf9-b9960379.jpg"
              class="card-img-top mt-3"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">蔬菜炒豬肉烤肉</h5>
              <p class="card-text">
                沒有什麼組合比香腸和辣椒更令人滿意了。畢竟，在胃液中甜美的焦糖味和肉中的超鹹味，還有什麼比這
              </p>
              <p class="card-text">
                <small class="text-muted">dated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card col-3">
            <img
              src="http://localhost:3015/img/sharerecipe/5fea5b5d27c560013957dcf9-b9960379.jpg"
              class="card-img-top mt-3"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">酒吧風格的牧羊人派</h5>
              <p class="card-text">
                沒有什麼組合比香腸和辣椒更令人滿意了。畢竟，在胃液中甜美的焦糖味和肉中的超鹹味，還有什麼比這
              </p>
              <div class="text-right">
                <i class="far fa-clock col-green"></i>&nbsp; 40分鐘
              </div>
            </div>
          </div>

          <div class="card col-3">
            <img
              src="http://localhost:3015/img/sharerecipe/5fea5b5d27c560013957dcf9-b9960379.jpg"
              class="card-img-top mt-3"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">青檸嫩雞直管麵</h5>
              <p class="card-text">
                沒有什麼組合比香腸和辣椒更令人滿意了。畢竟，在胃液中甜美的焦糖味和肉中的超鹹味，還有什麼比這更令人放鬆呢？
              </p>
              <div class="text-right">
                <i class="far fa-clock col-green"></i>&nbsp; 40分鐘
              </div>
            </div>
          </div>
          <div class="card col-3">
            <img
              src="http://localhost:3015/img/sharerecipe/5fea5b5d27c560013957dcf9-b9960379.jpg"
              class="card-img-top mt-3"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">水稻上的西南植物基蛋白質</h5>
              <p class="card-text">
                沒有什麼組合比香腸和辣椒更令人滿意了。畢竟，在胃液中甜美的焦糖味和肉中的超鹹味，還有什麼比這
              </p>
              <div class="text-right">
                <i class="far fa-clock col-green"></i>&nbsp; 40分鐘
              </div>
            </div>
          </div>
          <div class="card col-3">
            <img
              src="http://localhost:3015/img/sharerecipe/5fea5b5d27c560013957dcf9-b9960379.jpg"
              class="card-img-top mt-3"
              alt="..."
            />

            <div class="card-body">
              <h5 class="card-title">蔬菜炒豬肉烤肉</h5>
              <p class="card-text">
                沒有什麼組合比香腸和辣椒更令人滿意了。畢竟，在胃液中甜美的焦糖味和肉中的超鹹味，還有什麼比這
              </p>
              <div class="text-right">
                <i class="far fa-clock col-green"></i>&nbsp; 40分鐘
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <Pagination className="mx-auto mt-5">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </>
  )
}
export default Sharerecipe
