import { useState } from 'react';
import { DATA } from './util';
import logo from './logo.svg';
import './App.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { StorePanel } from './components/StorePanel';


function App() {

  const [stores, setStores] = useState(DATA);
  const handleDragDrop = (results) => {
    console.log('drag-n-Drop function called');
    console.log(results);
    const {source, destination, type} = results;

    if(!destination) return;
    if(source.droppableId === destination.droppableId && source.index === destination.index) return;
    if(type === 'group') {
      const reorderedStores = [...stores];

      const sourceIndex = source.index
      const destinationIndex = destination.index
      console.log(source.index)
      console.log(destination.index)
      const [removedStore] = reorderedStores.splice(sourceIndex, 1);
      reorderedStores.splice(destinationIndex, 0, removedStore);

      return setStores(reorderedStores);
    }


  };

  return (
      <div className='layout__wrapper'>
          <div className='card'>
            <DragDropContext onDragEnd={handleDragDrop}>
              <div className='header'>
                <h1>Shopping List</h1>
              </div>
              <Droppable droppableId='ROOT' type="group">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {stores.map((store, index) => 
                      <Draggable draggableId={store.id} key={store.id} index={index}>
                        {(provided) => (
                          <div className='store-container' 
                            {...provided.dragHandleProps} 
                            {...provided.draggableProps} 
                            ref={provided.innerRef}>
                            <StorePanel {...store} />
                          </div>
                        )}
                      </Draggable>
                    )}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
      </div>
  );
}

export default App;
