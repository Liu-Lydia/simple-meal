import React from 'react'
import '../../styles/public.css'
import '../../styles/fff.css'

function ExchangeRecord() {
  return (
    <>
      <div className="row fff-no-mr-and-pad d-none d-md-flex">
        {/* <!--保留空格 --> */}
        <div className="col-2 fff-no-mr-and-pad"></div>

        <div className="col-8 fff-no-mr-and-pad" style={{ height: ' 210px' }}>
          <div className="row d-flex align-items-center justify-content-around fff-no-mr-and-pad">
            <table id="fff-record-table">
              <tr>
                <th>項次</th>
                <th>兌換項目</th>
                <th>兌換日期</th>
                <th>到期日期</th>
                <th>使用狀況</th>
                <th>優惠條碼</th>
              </tr>
              <tr>
                <td>1</td>
                <td>50元折價卷</td>
                <td>2020/01/15</td>
                <td>2020/02/15</td>
                <td className="fff-reward-used">已使用</td>
                <td>
                  <div className="record">檢視</div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>星巴克買一送一</td>
                <td>2020/01/15</td>
                <td>2020/02/15</td>
                <td className="fff-reward-unuse">可使用</td>
                <td>
                  <div className="record">檢視</div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>星巴克買一送一</td>
                <td>2020/01/15</td>
                <td>2020/02/15</td>
                <td className="fff-reward-unuse">可使用</td>
                <td>
                  <div className="record">檢視</div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>50元折價卷</td>
                <td>2020/01/15</td>
                <td>2020/02/15</td>
                <td className="fff-reward-used">已使用</td>
                <td>
                  <div className="record">檢視</div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>50元折價卷</td>
                <td>2020/01/15</td>
                <td>2020/02/15</td>
                <td className="fff-reward-used">已使用</td>
                <td>
                  <div className="record">檢視</div>
                </td>
              </tr>
            </table>
          </div>
        </div>

        {/* <!--保留空格 --> */}
        <div className="col-2 fff-no-mr-and-pad"></div>
      </div>

      <div className="row fff-no-mr-and-pad d-flex d-md-none">
        {/* <!--保留空格 --> */}
        <div className="col-2 fff-no-mr-and-pad"></div>

        <div className="col-8 fff-no-mr-and-pad" style={{ height: ' 210px' }}>
          <div className="row d-flex align-items-center justify-content-around fff-no-mr-and-pad">
            <table id="fff-record-table">
              <tr>
                <td rowSpan="4">1</td>
                <th>兌換項目</th>
                <td>50元折價卷</td>
                <td rowSpan="4">
                  <div className="record">優惠條碼</div>
                </td>
              </tr>
              <tr>
                <th>兌換日期</th>

                <td>2020/01/15</td>
              </tr>
              <tr>
                <th>到期日期</th>
                <td>2020/02/15</td>
              </tr>
              <tr>
                <th>使用狀況</th>
                <td className="fff-reward-used">已使用</td>
              </tr>

              <tr>
                <td rowSpan="4">2</td>
                <th>兌換項目</th>
                <td>星巴克買一送一</td>
                <td rowSpan="4">
                  <div className="record">優惠條碼</div>
                </td>
              </tr>
              <tr>
                <th>兌換日期</th>

                <td>2020/01/15</td>
              </tr>
              <tr>
                <th>到期日期</th>
                <td>2020/02/15</td>
              </tr>
              <tr>
                <th>使用狀況</th>
                <td className="fff-reward-unuse">可使用</td>
              </tr>

              <tr>
                <td rowSpan="4">3</td>
                <th>兌換項目</th>
                <td>星巴克買一送一</td>
                <td rowSpan="4">
                  <div className="record">優惠條碼</div>
                </td>
              </tr>
              <tr>
                <th>兌換日期</th>

                <td>2020/01/15</td>
              </tr>
              <tr>
                <th>到期日期</th>
                <td>2020/02/15</td>
              </tr>
              <tr>
                <th>使用狀況</th>
                <td className="fff-reward-unuse">可使用</td>
              </tr>

              <tr>
                <td rowSpan="4">4</td>
                <th>兌換項目</th>
                <td>50元折價卷</td>
                <td rowSpan="4">
                  <div className="record">優惠條碼</div>
                </td>
              </tr>
              <tr>
                <th>兌換日期</th>

                <td>2020/01/15</td>
              </tr>
              <tr>
                <th>到期日期</th>
                <td>2020/02/15</td>
              </tr>
              <tr>
                <th>使用狀況</th>
                <td className="fff-reward-used">已使用</td>
              </tr>

              <tr>
                <td rowSpan="4">5</td>
                <th>兌換項目</th>
                <td>50元折價卷</td>
                <td rowSpan="4">
                  <div className="record">優惠條碼</div>
                </td>
              </tr>
              <tr>
                <th>兌換日期</th>

                <td>2020/01/15</td>
              </tr>
              <tr>
                <th>到期日期</th>
                <td>2020/02/15</td>
              </tr>
              <tr>
                <th>使用狀況</th>
                <td className="fff-reward-used">已使用</td>
              </tr>
            </table>
          </div>
        </div>

        {/* <!--保留空格 --> */}
        <div className="col-2 fff-no-mr-and-pad"></div>
      </div>
    </>
  )
}

export default ExchangeRecord
