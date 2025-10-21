import React from "react";

export default function App() {
  return (
    <div style={{
      fontFamily: "Pretendard, sans-serif",
      backgroundColor: "#f6f8f3",
      minHeight: "100vh",
      color: "#333"
    }}>
      {/* 헤더 */}
      <header style={{
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "15px 20px",
        fontSize: "1.4rem",
        fontWeight: "bold",
      }}>
        🌾 Becoming Farmer
      </header>

      {/* 메인 */}
      <main style={{ padding: "30px", textAlign: "center" }}>
        <h1>당신의 식탁에 직접 기른 작물을 나눠보세요 🥬</h1>
        <p style={{ marginTop: "10px", color: "#555" }}>
          집에서 키운 바질, 토마토, 고추 등 이웃과 교환하거나 판매할 수 있는 온라인 파머스마켓입니다.
        </p>

        <div style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}>
          <div style={{
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            width: "250px",
            padding: "20px"
          }}>
            <img
              src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=400&q=60"
              alt="basil"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>실내재배 바질 20g</h3>
            <p style={{ color: "#777" }}>서울 성동구 · 교환가능</p>
            <button style={{
              marginTop: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
              교환요청
            </button>
          </div>

          <div style={{
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            width: "250px",
            padding: "20px"
          }}>
            <img
              src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=60"
              alt="tomato"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>방울토마토 10개</h3>
            <p style={{ color: "#777" }}>경기 수원시 · 판매가 5,000원</p>
            <button style={{
              marginTop: "10px",
              backgroundColor: "#f57c00",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
              구매하기
            </button>
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer style={{
        backgroundColor: "#eee",
        padding: "20px",
        textAlign: "center",
        fontSize: "0.9rem",
        color: "#777"
      }}>
        © 2025 Becoming Farmer — 당신의 손으로 만든 작물, 세상과 나누세요 🌱
      </footer>
    </div>
  );
}
