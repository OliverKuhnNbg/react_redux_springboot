import { useState } from 'react';
import { DATA } from './util';
import logo from './logo.svg';
import './App.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { StorePanel } from './components/StorePanel';


function App() {

  const [stores, setStores] = useState(DATA);
  const handleDragDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    if (type === "group") {
      const reorderedStores = [...stores];

      const storeSourceIndex = source.index;
      const storeDestinatonIndex = destination.index;

      const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
      reorderedStores.splice(storeDestinatonIndex, 0, removedStore);

      return setStores(reorderedStores);
    }
  
    const itemSourceIndex = source.index;
    const itemDestinationIndex = destination.index;

    const storeSourceIndex = stores.findIndex(
      (store) => store.id === source.droppableId
    );
    const storeDestinationIndex = stores.findIndex(
      (store) => store.id === destination.droppableId
    );

    const newSourceItems = [...stores[storeSourceIndex].items];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...stores[storeDestinationIndex].items]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
    newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

    const newStores = [...stores];

    newStores[storeSourceIndex] = { ...stores[storeSourceIndex], items: newSourceItems };
    newStores[storeDestinationIndex] = { ...stores[storeDestinationIndex], items: newDestinationItems };

    setStores(newStores);
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
