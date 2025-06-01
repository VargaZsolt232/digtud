<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Inter', sans-serif;
        background-color: #f3f4f6;
        color: #1f2937;
        line-height: 1.6;
    }
    .container {
        max-width: 960px;
        margin: 0 auto;
        padding: 2rem 1rem;
    }
    header {
        background: linear-gradient(to right, #3b82f6, #1e40af);
        color: white;
        text-align: center;
        padding: 4rem 1rem 3rem;
        border-bottom: 4px solid #1d4ed8;
    }
    header h1 {
        font-size: 3rem;
        margin-bottom: 0.5rem;
    }
    header p {
        font-size: 1.2rem;
        color: #dbeafe;
    }
    .card {
        background-color: white;
        border-radius: 12px;
        padding: 2rem;
        margin-bottom: 2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    }
    .card h2 {
        margin-bottom: 0.5rem;
        color: #1d4ed8;
    }


    a {
        color: inherit;
        text-decoration: none;
    }



    @media (max-width: 600px) {
        header h1 {
            font-size: 2rem;
        }

        .card {
            padding: 1.5rem;
        }
    }

</style>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Digitális Tudás</title>
</head>
<body>
  <header>
    <div class="container">
      <h1>Digitális Tudás</h1>
      <p>Tanulj új dolgokat az internetről</p>
    </div>
  </header>
  <main class="container">
	<a href="viselkedes">
	<section class="card">
      <h2>📚 Viselkedés az interneten</h2>
      <p>Olvass az interneten való viselkedésről.</p>
    </section>
	</a>
	<a href="fuggoseg">
	<section class="card">
      <h2>📚 Függőség</h2>
      <p>Olvass a függőségről.</p>
    </section>
	</a>
	<a href="aifelismeres">
	<section class="card">
      <h2>📚 Mesterséges intelligencia felismerése</h2>
      <p>Olvass a mesterséges intelligencia álltal késztett tartalom felismeréséről.</p>
    </section>
	</a>
    <a href="aiquiz">
	  <section class="card">
      <h2>🛠️ Próbáld ki a játékot!</h2>
      <p>Kíváncs vagy hogy mennyire mennne az MI által generált képek felismerése? Próbáld ki!</p>
    </section>
	</a>
  </main>
</body>