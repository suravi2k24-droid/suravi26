// 3D Buffer Loader Handler
class BufferLoader {
    constructor() {
        this.loaderContainer = document.getElementById('loader-container');
        this.loaderPercent = document.querySelector('.loader-percent');
        this.currentProgress = 0;
        this.targetProgress = 0;
        this.animationFrameId = null;
        this.init();
    }

    init() {
        // Start the loading animation
        this.startLoading();
    }

    startLoading() {
        // Simulate loading progress with realistic timing
        const progressStages = [
            { progress: 10, delay: 200 },
            { progress: 25, delay: 400 },
            { progress: 40, delay: 600 },
            { progress: 60, delay: 900 },
            { progress: 75, delay: 1200 },
            { progress: 85, delay: 1500 },
            { progress: 95, delay: 1800 }
        ];

        progressStages.forEach(stage => {
            setTimeout(() => {
                this.updateProgress(stage.progress);
            }, stage.delay);
        });

        // Final push to 100%
        setTimeout(() => {
            this.updateProgress(100);
            // Hide loader after reaching 100%
            setTimeout(() => {
                this.hideLoader();
            }, 800);
        }, 2000);
    }

    updateProgress(targetPercent) {
        this.targetProgress = targetPercent;
        this.animateProgress();
    }

    animateProgress() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }

        const animate = () => {
            // Smooth easing towards target
            const difference = this.targetProgress - this.currentProgress;
            this.currentProgress += difference * 0.1;

            // Update DOM
            this.loaderPercent.textContent = Math.floor(this.currentProgress);

            // Continue animation if not at target
            if (Math.abs(this.targetProgress - this.currentProgress) > 0.5) {
                this.animationFrameId = requestAnimationFrame(animate);
            } else {
                this.currentProgress = this.targetProgress;
                this.loaderPercent.textContent = Math.floor(this.currentProgress);
            }
        };

        animate();
    }

    hideLoader() {
        this.loaderContainer.classList.add('hidden');
    }
}

// Initialize loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new BufferLoader();
});

// Ensure loader is hidden on page load completion
window.addEventListener('load', () => {
    setTimeout(() => {
        const loaderContainer = document.getElementById('loader-container');
        if (loaderContainer) {
            loaderContainer.classList.add('hidden');
        }
    }, 2500); // Ensure it's hidden after 2.5 seconds total
});
