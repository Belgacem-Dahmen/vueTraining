<template>
    <div class="project-assign">
        <h2>Bulk Project assign</h2>
        <div class="project-input">
            <p>Assigned to </p>
            <select name="assignTo" id="assignTo">
                <option value="first">First Value</option>
                <option value="second" selected>Second Value</option>
                <option value="third">Third Value</option>
            </select>
        </div>
        <div class="modal-btns">
            <button class="mainButton">Cancel</button>
            <button class="mainButton">Update</button>
        </div>
    </div>
</template>

<style scoped>

.project-assign {
    background-color: white;
    width: 400px;
    height: 210px;
    border-radius: 6px;
    padding: 24px;
    gap: 16px;
    display: flex;
    flex-direction: column;
}
.project-input {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
select {
    border-radius: 6px;
    padding :8px 12px;
    border: 1px solid #CBD5E1;
}
.modal-btns{
    display: flex;
    gap: 8px;
    justify-content: flex-end;
}

</style>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    console.log("component is mounted");
    console.log("Fetching users");
    
})
</script>