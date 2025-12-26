<template>
    <div class="modal show">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <slot name="solt-body"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="solt-footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>