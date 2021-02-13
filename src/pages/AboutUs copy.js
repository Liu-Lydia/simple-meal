import SingleMapDetail from '../components/aboutus/SingleMapDetail'

function AboutUs() {
  return (
    <>
      <ul>
        <li>
          <a
            href="https://www.google.com/search?rlz=1C1CHBF_zh-TWTW924TW924&biw=1536&bih=750&tbs=qdr%3Ay&ei=0F0aYP_ADN2Mr7wPnr2CiA4&q=google+map+api%E7%94%B3%E8%AB%8B&oq=gmap+api+%E7%94%B3%E8%AB%8B&gs_lcp=CgZwc3ktYWIQARgAMggIABCwAxDNAjIICAAQsAMQzQIyCAgAELADEM0CUABYAGCe2gpoAXAAeACAAYcBiAGHAZIBAzAuMZgBAKoBB2d3cy13aXrIAQPAAQE&sclient=psy-ab"
            target="_blank"
            rel="noreferrer"
          >
            google map api申請
          </a>
        </li>
      </ul>
      <h2>捷運大安站</h2>
      <SingleMapDetail
        lat={25.033198}
        lng={121.543575}
        infoTitle="捷運大安站"
        infoContent="this is a sample string"
      />
      <h2>捷運科技大樓站</h2>
      <SingleMapDetail
        lat={25.026312}
        lng={121.543439}
        infoTitle="捷運科技大樓站"
        infoContent="this is a sample string"
      />
    </>
  )
}

export default AboutUs
