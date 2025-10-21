import React, { useState } from 'react';

export default function App() {
  const [userType, setUserType] = useState(null);
  const [sellerInfo, setSellerInfo] = useState(null);
  const [tradeOption, setTradeOption] = useState(null);
  const [negoVisible, setNegoVisible] = useState(false);
  const [negoValue, setNegoValue] = useState(0);

  const buttonClass =
    'px-4 py-2 rounded-lg shadow font-medium transition transform hover:scale-105';
  const inputClass =
    'border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400';

  // 1️⃣ 인증 단계
  if (!userType) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 font-sans">
        <h1 className="text-4xl font-extrabold mb-6 text-emerald-700 tracking-tight">
          🌾 Becoming Farmer
        </h1>
        <p className="text-gray-600 mb-8 text-lg">회원 유형을 선택하세요</p>
        <div className="flex gap-6">
          <button
            onClick={() => setUserType('home')}
            className={`${buttonClass} bg-emerald-500 text-white hover:bg-emerald-600`}
          >
            🏡 식물재배기 사용자 인증
          </button>
          <button
            onClick={() => setUserType('pro')}
            className={`${buttonClass} bg-amber-500 text-white hover:bg-amber-600`}
          >
            👨‍🌾 전문 농부 인증
          </button>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          ※ 인증된 사용자만 판매자로 등록할 수 있습니다.
        </p>
      </div>
    );
  }

  // 2️⃣ 셀러 등록 단계
  if (!sellerInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-green-50 p-8 font-sans flex flex-col items-center">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            ✅ 셀러 등록 ({userType === 'home' ? '식물재배기 인증' : '전문 농부'})
          </h2>
          <p className="text-gray-500 mb-6">
            재배 과정을 사진, 영상, 설명으로 기록해주세요.
          </p>

          <input id="cropName" placeholder="작물명 (예: 바질)" className={`${inputClass} mb-3`} />
          <input id="location" placeholder="지역 (예: 서울 성동구)" className={`${inputClass} mb-3`} />
          <textarea id="desc" placeholder="재배 과정 설명" className={`${inputClass} mb-4`} rows="4"></textarea>
          <input type="file" accept="image/*,video/*" multiple className="mb-6" />

          <button
            onClick={() =>
              setSellerInfo({
                cropName: document.getElementById('cropName').value,
                location: document.getElementById('location').value,
                desc: document.getElementById('desc').value,
              })
            }
            className={`${buttonClass} bg-emerald-600 text-white hover:bg-emerald-700 w-full`}
          >
            등록하기
          </button>
        </div>
      </div>
    );
  }

  // 3️⃣ 거래 방식 선택
  if (!tradeOption) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 p-8 font-sans flex flex-col items-center">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-extrabold mb-2 text-emerald-700">
            🌿 {sellerInfo.cropName}
          </h2>
          <p className="text-gray-500 mb-8">
            판매자: {userType === 'home' ? '식물재배기 사용자' : '전문 농부'}
          </p>

          <div className="flex gap-6 mb-6">
            <button
              onClick={() => setTradeOption('exchange')}
              className={`${buttonClass} bg-emerald-400 text-white hover:bg-emerald-500 w-1/2`}
            >
              🤝 교환 등록
            </button>
            <button
              onClick={() => setTradeOption('sell')}
              className={`${buttonClass} bg-orange-400 text-white hover:bg-orange-500 w-1/2`}
            >
              💰 판매 등록
            </button>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h3 className="font-semibold mb-2 text-gray-700">📸 재배 과정</h3>
            <p className="text-gray-600 whitespace-pre-wrap">{sellerInfo.desc}</p>
          </div>
        </div>
      </div>
    );
  }

  // 4️⃣ 교환 등록
  if (tradeOption === 'exchange') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8 font-sans flex flex-col items-center">
        <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">🤝 교환 등록</h2>
          <input id="exchangeCrop" placeholder="교환 희망 작물 (예: 상추)" className={`${inputClass} mb-3`} />
          <input id="exchangeAmount" placeholder="교환 희망 수량 (예: 200g)" className={`${inputClass} mb-6`} />
          <button
            onClick={() => alert('교환 등록이 완료되었습니다!')}
            className={`${buttonClass} bg-emerald-600 text-white hover:bg-emerald-700 w-full`}
          >
            등록 완료
          </button>
        </div>
      </div>
    );
  }

  // 5️⃣ 판매 등록
  if (tradeOption === 'sell') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-8 font-sans flex flex-col items-center">
        <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">💰 판매 등록</h2>
          <input id="price" placeholder="판매 희망가 (원 단위)" className={`${inputClass} mb-4`} />

          <label className="flex items-center gap-2 mb-4 text-gray-700">
            <input type="checkbox" onChange={(e) => setNegoVisible(e.target.checked)} /> 네고 허용
          </label>

          {negoVisible && (
            <div className="mb-6 bg-gray-50 border border-gray-200 rounded-xl p-4">
              <label className="block text-sm text-gray-500 mb-2">구매자 제안가 테스트</label>
              <input
                type="number"
                placeholder="구매자 제안가"
                onChange={(e) => setNegoValue(e.target.value)}
                className={`${inputClass} mb-3`}
              />
              <button
                onClick={() => alert(`판매자와 ${negoValue}원으로 협상되었습니다.`)}
                className={`${buttonClass} bg-orange-500 text-white hover:bg-orange-600 w-full`}
              >
                💬 네고 시뮬레이션
              </button>
            </div>
          )}

          <button
            onClick={() => alert('판매 등록이 완료되었습니다!')}
            className={`${buttonClass} bg-emerald-600 text-white hover:bg-emerald-700 w-full`}
          >
            판매 등록 완료
          </button>
        </div>
      </div>
    );
  }
}
