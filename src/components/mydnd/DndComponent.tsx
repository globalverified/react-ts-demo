import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { CardComponent } from './CardComponent';

export const MyDndComponent = () => {
    // const Item = styled(Paper)(({ theme }) => ({
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));
    const finalData = [
        { id: 'one', name: 'MAYR Sagar', label: 'one Sagar' },
        { id: 'two', name: 'MAYR ERSTE', label: 'one Kartik' },
        { id: 'three', name: 'MAYR CREDITLAB', label: 'one Suresh' },
        { id: 'four', name: 'MAYR ITC', label: 'one Ramesh' },
    ];
    const [data, setData] = useState(finalData);
    function handleOnDragEnd(res: any) {
        if(!res.destination) return;
        console.log('r', res);
        const items = Array.from(data);
        console.log('items before', items);
        const [reorderedItem] = items.splice(res.source.index, 1);
        console.log('reorderedItem', reorderedItem);

        items.splice(res.destination.index, 0, reorderedItem);
        console.log('items after', items);
        setData(items);
    }
    return (
        <div>
            this is my DndComponent
            <Grid container spacing={3} direction="row"
                justifyContent="center"
                alignItems="center" columns={11}>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId='mycards'>
                        {(provided) => (
                            <ol {...provided.droppableProps} ref={provided.innerRef}>
                                {data.map(
                                    ({ id, name, label }, index) => {
                                        return (
                                            <Draggable key={id} draggableId={id} index={index}>
                                                {(provided) => (
                                                    <li {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                                                        {/* <div>{name}{label}</div> */}
                                                        <Grid item xs={11}>
                                                            <Card variant="outlined">
                                                                <CardComponent name={name}/>
                                                            </Card>
                                                        </Grid>
                                                    </li>
                                                )}

                                            </Draggable>
                                        )
                                    }
                                )}
                                {provided.placeholder}
                            </ol>
                        )}
                    </Droppable>
                </DragDropContext>
            </Grid>
        </div>
    )
}