import React from "react";
import "./ExtraSection.css";

function ExtraSection() {
  return (
    <div className="extra-section pt-5 pb-5" id="extraSection">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="extra-section-sub-heading mb-3">Extracurricular</h1>
            <h1 className="extra-section-heading mb-3">Diary Page</h1>
          </div>

          <div className="col-12">
            <div
              id="extraIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="extra-card text-center">
                    <img
                      src="./Images/diaryIcon.png"
                      className="extra-card-image"
                      alt="..."
                    />

                    <p className="extra-card-description">
                      दिनों का भी कोई ठिकाना नहीं होता ... कहां किसी एक दिन
                      यादों का बाजार ले आते हैं कहीं एक दिन बिल्कुल खाली हाथ घर
                      आते हैं...ऐसा ही होता हैं
                    </p>
                    <p className="extra-card-person-name">- May'20</p>

                    <div>
                      <button
                        type="button"
                        className="btn btn-outline-success"
                        data-toggle="modal"
                        data-target="#exampleModal1"
                      >
                        Read
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModal1"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel1"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog mt-5">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title thanking-customers-section-modal-title"
                                id="exampleModalLabel1"
                              >
                                मेरी डायरी का एक पेज
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <p>
                                दिनों का भी कोई ठिकाना नहीं होता ... कहां किसी
                                एक दिन यादों का बाजार ले आते हैं कहीं एक दिन
                                बिल्कुल खाली हाथ घर आते हैं ... ऐसा ही होता हैं
                                या तो खुशियां बटती है या गम का अंबार होता हैं...
                                और कुछ दिन यूं ही बेजायका निकल जाते हैं बुरे वो
                                भी नहीं होते बस‌ उनमेें कोई मजा नहीं होता ...
                                जैसे खाली कमरे,आवाज तो गूंजती है मगर खालीपन से
                                ... हम बात भी करते हैं मगर अपने ही वजूद से ...
                                सवाल भी खुद से जवाब भी खुद को ... बिल्कुल वैसे
                                ही जैसे बेचैनी भी जिंदगी का नाम हो और सुकून
                                भी...!! <hr />~ Alok Aakash
                              </p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="extra-card text-center">
                    <img
                      src="./Images/diaryIcon.png"
                      className="extra-card-image"
                      alt="..."
                    />
                    <p className="extra-card-description">
                      हम कितने भी बड़े हो जाए बच्चों की किताबें हमेशा अच्छी लगती
                      है... चाचा चौधरी, बिल्लू ,टिंकू से लेकर अलीबाबा चालीस चोर
                      ,विक्रम बेताल तक सब ...
                    </p>
                    <p className="extra-card-person-name">- Nov'20</p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-outline-success"
                        data-toggle="modal"
                        data-target="#exampleModal2"
                      >
                        Read
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModal2"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel2"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog mt-5">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title thanking-customers-section-modal-title"
                                id="exampleModalLabel2"
                              >
                                मेरी डायरी का एक पेज
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <p>
                                हम कितने भी बड़े हो जाए बच्चों की किताबें हमेशा
                                अच्छी लगती है ... चाचा चौधरी, बिल्लू ,टिंकू से
                                लेकर अलीबाबा चालीस चोर ,विक्रम बेताल तक सब ...
                                कहानियों में अपनी दिलचस्पी है या कहीं सादगी
                                सरलता ख्वाबों की दुनिया से अब भी प्यार है या फिर
                                ऐसी उम्मीद है कि चमत्कार अब भी हो सकता है ...
                                बचपन एक ऐसा गांव है जहां अपने अंदर उससे मिलते
                                हैं हम , जिसको दुनिया ने बदला ही नहीं था ...बचपन
                                और उसकी यादें जीवन के घर का एक ऐसा कमरा है जो
                                हमारा है ... बिस्तर पर पड़ी चादर से लेकर मेज पर
                                पड़ी उस किताब तक!!! <hr />~ Alok Aakash
                              </p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="extra-card text-center">
                    <img
                      src="./Images/diaryIcon.png"
                      className="extra-card-image"
                      alt="..."
                    />
                    <p className="extra-card-description">
                      कल दिवाली आ जाएगी और फिर कुछ वक्त बाद क्रिसमस और फिर ये
                      साल भी खत्म....फिर उसके बाद ..??एक-एक दिन जो बीतता जा रहा
                      है
                    </p>
                    <p className="extra-card-person-name">- Nov'21</p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-outline-success"
                        data-toggle="modal"
                        data-target="#exampleModal3"
                      >
                        Read
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModal3"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel3"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog mt-5">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title thanking-customers-section-modal-title"
                                id="exampleModalLabel3"
                              >
                                मेरी डायरी का एक पेज
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <p>
                                कल दिवाली आ जाएगी और फिर कुछ वक्त बाद क्रिसमस और
                                फिर ये साल भी खत्म....फिर उसके बाद ....??एक-एक
                                दिन जो बीतता जा रहा है हमें लगता है कि एक
                                फेस्टिवल के जो मायने हैं कि कैसे ये हमारी जिंदगी
                                में उम्मीद की किरण बनकर आते हैं मगर इस किरण का
                                क्या फायदा, जब हमारी जिंदगी में ही अंधेरा
                                है....पूरी दुनिया बात कर रही है दिवाली के बारे
                                में....रोशनी का त्यौहार है, उम्मीदों का त्यौहार
                                है ,बुराई पर अच्छाई की जीत है मगर बुराई-अच्छाई
                                ,रोशनी-अंधेरा ,खुशी-गम कितने मोल भाव है न,इन
                                सारे इमोशन के ,इन सारे ऑप्श- डाउंस के....मगर
                                हमलोग फिर भी यह समझ नहीं पाते कि एक त्यौहार कैसे
                                मनाया इनसान....?? हम अपने लाइफ में इतने परेशान
                                हैं, हमें लगता है कि हंसे तो क्यों, रोए तो किसके
                                लिए....हमें अपने बारे में कुछ पता ही नहीं है
                                ,इतने अंधेरे में हम हैं और एक दिये जलाने की
                                कोशिश में हजार बार नियत बदलती है....क्या करें
                                दीया अब हम जलाते भर इसलिए है कि सामने वाले ने
                                लाइट अच्छी लगा रखी है....अब उस दिए का मोल जो है
                                बदल चुके हैं....वक्त जो बदल गया है.त्यौहार कोई
                                मनाता ही नहीं है अब ,त्यौहार तो बस आते हैं और
                                चले जाते हैं .....और फिर दिवाली की उस रात,तुम
                                सोच कर देखो , उस चमकदार रात में जब पूरी दुनिया
                                खुश हो रही होगी ,पूरे देश में लोग खुशियां मना
                                रहे होंगे ....वापस रात में जब सोएंगे तो फिर वही
                                पापी दिल वो अंधेरे वाली जिंदगी में बैठकर सोच रहा
                                होगा कि यार ये भी गया, अब नेक्स्ट क्रिसमस ....और
                                क्रिसमस में फिर से हम अपने आप को झूठ का सपना
                                दिखाएंगे और वहां फिर से रोशनी दिखाएंगे जबकि
                                जिंदगी में खुद अंधेरा है...अरे दीया जलाना ही है
                                तो एक बार अपने लिए जलाओ और उस लौ को गौर से
                                देखो....और फिर कल उस लौ की रोशनी से बात करेंगे
                                अभी तो बस दिया जलाने की कोशिश चाहिए... !! <hr />
                                ~ Alok Aakash
                              </p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-center">
                <a
                  href="#extraIndicators"
                  role="button"
                  data-slide="prev"
                  className=""
                >
                  <span
                    className="carousel-control-prev-icon carousel-arrow"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only carousel-prev-arrow">Previous</span>
                </a>

                <a href="#extraIndicators" role="button" data-slide="next">
                  <span
                    className="carousel-control-next-icon carousel-arrow"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only carousel-control-next-icon">
                    Next
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtraSection;
