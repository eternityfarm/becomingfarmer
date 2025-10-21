import React, { useState } from 'react';

export default function App() {
  const [userType, setUserType] = useState(null);
  const [sellerInfo, setSellerInfo] = useState(null);
  const [tradeOption, setTradeOption] = useState(null);
  const [negoVisible, setNegoVisible] = useState(false);
  const [negoValue, setNegoValue] = useState(0);

  // 1️⃣ 인증 단계
  if (!userType) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 font-sans">
        <h1 className="text-3xl font-bold mb-6">🌾 Becoming Farmer</h1>
        <p className="text-gray-600 mb-4">회원 유형을 선택하세요.</p>
        <div className="flex gap-4">
          <button
            onClick={() => setUserType('home')}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow"
          >
            🏡 식물재배기 사용자 인증
          </button>
          <button
            onClick={() => setUserType('pro')}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow"
          >
            👨‍🌾 전문 농부 인증
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-500">※ 인증된 사용자만 판매자로 등록할 수 있습니다.</p>
      </div>
    );
  }

  // 2️⃣ 셀러 등록 단계
  if (!sellerInfo) {
    return (
      <div className="min-h-screen bg-white p-6 font-sans">
        <h2 className="text-2xl font-bold mb-4">
          ✅ 셀러 등록 ({userType === 'home' ? '식물재배기 인증' : '전문 농부'})
        </h2>
        <p className="text-gray-600 mb-4">재배 과정을 사진, 영상, 설명으로 기록해주세요.</p>

        <input id="cropName" placeholder="작물명 (예: 바질)" className="border p-2 w-full mb-2 rounded" />
        <input id="location" placeholder="지역 (예: 서울 성동구)" className="border p-2 w-full mb-2 rounded" />
        <textarea id="desc" placeholder="재배 과정 설명" className="border p-2 w-full mb-2 rounded"></textarea>
        <input type="file" accept="image/*,video/*" multiple className="border p-2 w-full mb-4 rounded" />

        <button
          onClick={() =>
            setSellerInfo({
              cropName: document.getElementById('cropName').value,
              location: document.getElementById('location').value,
              desc: document.getElementById('desc').value,
            })
          }
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          등록하기
        </button>
      </div>
    );
  }

  // 3️⃣ 거래 방식 선택
  if (!tradeOption) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 font-sans">
        <h2 className="text-2xl font-bold mb-2">🌿 {sellerInfo.cropName}</h2>
        <p className="text-gray-600 mb-4">판매자: {userType === 'home' ? '식물재배기 사용자' : '전문 농부'}</p>

        <div className="flex gap-4">
          <button
            onClick={() => setTradeOption('exchange')}
            className="px-4 py-2 bg-green-400 text-white rounded shadow"
          >
            교환 등록
          </button>
          <button
            onClick={() => setTradeOption('sell')}
            className="px-4 py-2 bg-orange-400 text-white rounded shadow"
          >
            판매 등록
          </button>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">📸 재배 과정</h3>
          <p className="text-gray-700 whitespace-pre-wrap">{sellerInfo.desc}</p>
        </div>
      </div>
    );
  }

  // 4️⃣ 교환 또는 판매 상세 폼
  if (tradeOption === 'exchange') {
    return (
      <div className="min-h-screen bg-white p-6 font-sans">
        <h2 className="text-2xl font-bold mb-4">🤝 교환 등록</h2>
        <input id="exchangeCrop" placeholder="교환 희망 작물 (예: 상추)" className="border p-2 w-full mb-2 rounded" />
        <input id="exchangeAmount" placeholder="교환 희망 수량 (예: 200g)" className="border p-2 w-full mb-2 rounded" />
        <button
          onClick={() => alert('교환 등록이 완료되었습니다!')}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          교환 등록 완료
        </button>
      </div>
    );
  }

  if (tradeOption === 'sell') {
    return (
      <div className="min-h-screen bg-white p-6 font-sans">
        <h2 className="text-2xl font-bold mb-4">💰 판매 등록</h2>
        <input id="price" placeholder="판매 희망가 (원 단위)" className="border p-2 w-full mb-2 rounded" />
        <label className="flex items-center gap-2 mb-4">
          <input type="checkbox" onChange={(e) => setNegoVisible(e.target.checked)} /> 네고 허용
        </label>

        {negoVisible && (
          <div className="mb-4">
            <label>구매자 제안가 입력 테스트: </label>
            <input
              type="number"
              placeholder="구매자 제안가"
              onChange={(e) => setNegoValue(e.target.value)}
              className="border p-2 w-full rounded"
            />
            <button
              onClick={() => alert(`판매자와 ${negoValue}원으로 협상되었습니다.`)}
              className="mt-2 px-4 py-2 bg-orange-400 text-white rounded"
            >
              네고 시뮬레이션
            </button>
          </div>
        )}

        <button
          onClick={() => alert('판매 등록이 완료되었습니다!')}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          판매 등록 완료
        </button>
      </div>
    );
  }
}
