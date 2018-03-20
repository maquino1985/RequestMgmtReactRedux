/**
 * Created by Mark Aquino on 3/21/17.
 */
import { VisiblityFilters } from '../actions/actions'

const initialState = {
    measurementTypes: [
        {
            id: 1,
            label: 'Enodotoxin Measurement',
            attributes: [
                measurementAttributes[0],
            ],
        }
    ],

    measurementAttributes: [
        {
            id: 1,
            parentMeasurementType: measurementTypes[0],
            label: 'Endotoxin Level Value',
            selected: true,
        }
    ],

    requestItems: [],

    associatedEntities: {
        ids: ['ppb-123', 'ppb-456']
    }
}

function requestApp(state = initialState, action) {
    let requests = state.requestItems;
    switch (action.type){
        case ADD_REQUEST_ITEM:
            let id = Math.random();
            // or id = action.id .... dont sent types and attributes instead send type prop with 1 MeasurementType.id === action.id
            return Object.assign({}, state, {
                requestItems: [...requests,
                        <Request id={id} measurementTypes={} measurementAttributes={} onClick={} handleToggle={}/>
                    ]
            });
        case REMOVE_REQUEST_ITEM:
            // in case ever need to remove based on id instead...
            ///let requestId = action.id;
            return Object.assign({}, state, {
                requestItems: requests.splice(-1)
            });
        case TOGGLE_SELECTION:
            return Object.assign({}, state, {
                //TODO: get either measurementType, attributes, or requestItem by action.id and set all attributes selected: true
                requestItems: state.requestItems.map((requestItem, index) => {
                    if (action.id === requestItem.id) {
                        requestItem.measurementAttributes.map((attr) => {
                            return att.selected = !attr.selected;
                        })
                    }
                    return requestItem;
                })
            });
        default:
            return state;
    }

    //for now dont handle actions
    // just return state
}