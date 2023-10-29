<div>
  <div>
    <h1>Lobby {lobbyId}</h1>

    {allPlayers.map(({ username }, index) => (
      <div key={index}>{username}</div>
    ))}

    <button onClick={createLobby}>Create Game</button>
  </div>

  <div>
    <button onClick={startGame}>Start Game</button>

    <form onSubmit={handleSubmit}>
      <div className=" flex ">
        <span>lobby id : </span>
        <input
          name="newLobbyId"
          placeholder="enter your message"
          value={newLobbyId}
          onChange={(e) => setNewLobbyId(e.target.value)}
          autoComplete={"off"}
        />
      </div>
      <br />
      <div className=" flex ">
        <span>username : </span>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <button>submit</button>
    </form>
  </div>
</div>;

// <div>
//   <h1>Chat app</h1>
//   <h1>Enter a username</h1>

//   <input value={username} onChange={(e) => setUsername(e.target.value)} />

//   <br />
//   <br />

//   <div>
// {allMessages.map(({ username, message }, index) => (
//   <div key={index}>
//     {username}: {message}
//   </div>
// ))}

//     <br />

//     <form onSubmit={handleSubmit}>
//       <input
//         name="message"
//         placeholder="enter your message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         autoComplete={"off"}
//       />
//     </form>
//   </div>
// </div>
