import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

interface SettingsModalProps {
  onClose: () => void;
}

const SettingsModal = ({ onClose }: SettingsModalProps) => {
  return (
    <Modal open={true} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          Ajustes
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Aquí puedes configurar tus ajustes.
        </Typography>
        <Button onClick={onClose} sx={{ mt: 2 }} variant="contained" color="primary">
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
};

export default SettingsModal;