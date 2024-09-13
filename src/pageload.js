import createresttohomepage from './restto';
import createtabs from './tabs';

function resttohomepage() {
    createtabs();
    createresttohomepage();
}

export default resttohomepage; // Export the function itself, not the result of the function call
