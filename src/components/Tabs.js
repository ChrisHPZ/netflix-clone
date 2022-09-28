import Movies from './Movies';
import Action from './Action';
import { useState } from 'react';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("movies");
  const handleMoviesTab = () => {
    setActiveTab("movies");
  }
  const handleActionMovies = () => {
    setActiveTab("action")
  }
  return (
    <div className="container">
      <div className="tabs">
        <span 
          className={activeTab === "movies" ? "active-tab" : ""}
          onClick={handleMoviesTab}
        >
          Movies
        </span>
        <span 
          className={activeTab === "action" ? "active-tab" : ""}
          onClick={handleActionMovies}
        >
          Action
        </span>
      </div>
      <div className="outlet">
        {activeTab === "movies" ? <Movies /> : <Action />}
      </div>
    </div>  
  )
}
