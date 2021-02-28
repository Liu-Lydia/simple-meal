import React from 'react'

function SurpriseRuleMap() {
  return (
    <>
      {/* 地理位置 ↓↓↓ */}
      <div className="lll-mobile-block">
        <div className="col-8 p-0 lll-max100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14459.209555474516!2d121.54840684864891!3d25.040779468751495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd379a5ec97%3A0xedc006d25a9e35df!2z6LOH562W5pyDIOaVuOS9jeaVmeiCsueglOeptuaJgCDmlbjkvY3kurrmiY3ln7nogrLkuK3lv4M!5e0!3m2!1szh-TW!2stw!4v1614129225624!5m2!1szh-TW!2stw"
            width="100%"
            height="400px"
            frameborder="0"
            style={{ border: '0' }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div class="col-4 p-0 lll-max100-center">
          <p class="m-0 text-center txt-sub1 lll-red lll-12px">
            Tel. 02-6631 6666 <br />
            台北市大安區復興南路一段390號2樓 <br />
            Open. 10:00 ~ 21:00 <br />
          </p>

          <div className="text-center txt-sub1 lll-red">
            <i className="far fa-envelope lll-pr30"></i>
            <i className="fab fa-instagram lll-pr30"></i>
            <i className="fab fa-facebook-square lll-pr30"></i>
            <i className="fab fa-line"></i>
          </div>
        </div>
      </div>
      {/* 地理位置 ↑↑↑ */}
    </>
  )
}

export default SurpriseRuleMap
