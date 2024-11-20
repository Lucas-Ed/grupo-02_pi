const API_URL = process.env.REACT_APP_API_URL || process.env.NEXT_PUBLIC_API_URL;

document.getElementById("userForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

    try {
      const response = await fetch("{API_URL}/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        alert("Você se cadastrou com sucesso, na newsletter !");
      } else {
        alert("Erro ao se cadastrar !.");
      }
    } catch (error) {
      console.error("Erro:", error);
    }


    
  });